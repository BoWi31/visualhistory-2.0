import React, { useState, useEffect, useMemo, useRef } from 'react';
import { PageEntry, assetUrl } from './types';
import * as FreiheitData from './bildanalyse/freiheitfuehrtvolk';
import * as NapoleonData from './bildanalyse/napoleon';
import * as CheData from './bildanalyse/che';
import { CONTENT_REGISTRY } from './analysisContent';
import { Infographic } from './bildanalyse/components/Infographic';

// BoWi Design-Konstanten
const BOWI_GREEN = "emerald-600";
const BOWI_BLUE = "sky-800";

const PAGES_DATA: PageEntry[] = [
  {
    "id": "napoleon-1801",
    "title": "Napoleon überquert die Alpen",
    "subtitle": "Jacques-Louis David • 1801",
    "description": "Napoleon überquert die Alpen",
    "path": "bildanalyse/napoleon",
    "imageUrl": "napoleon-1801.jpg",
    "year": 1801,
    "tags": ["NEUZEIT", "FRANKREICH", "MACHTBILD"],
    "focusTag": "MACHTBILD",
    "difficulty": 1,
    "shortText": "Napoleon als strahlender Held auf einem Pferd – Inszenierung oder Wahrheit?"
  },
  {
    "id": "che-portraet-1960",
    "title": "Che Guevara – Bild als Symbol",
    "subtitle": "Alberto Korda • 1960",
    "description": "Guerillero Heroico – Vom Foto zur Weltikone",
    "path": "bildanalyse/che",
    "imageUrl": "che-portraet.jpg",
    "year": 1960,
    "tags": ["KALTER KRIEG", "REVOLUTION", "IKONE"],
    "focusTag": "SYMBOLBILD",
    "difficulty": 3,
    "shortText": "Das berühmteste Porträt der Welt. Aber wer war der Mann wirklich?"
  },
  {
    "id": "napalm-1972",
    "title": "Angst und Flucht im Vietnamkrieg",
    "subtitle": "Nick Út • 1972",
    "description": "Napalm-Angriff 1972",
    "path": "bildanalyse/napalm",
    "imageUrl": "napalm1972.jpg",
    "year": 1972,
    "tags": ["MODERNE", "VIETNAM", "KRIEG"],
    "focusTag": "KRIEG & MEDIEN",
    "difficulty": 2,
    "shortText": "Ein Foto, das die Welt veränderte. Doch darf man das Leid von Kindern so zeigen?"
  },
  {
    "id": "freiheit-1830",
    "title": "Die Freiheit führt das Volk",
    "subtitle": "Eugène Delacroix • 1830",
    "description": "Die Freiheit führt das Volk",
    "path": "bildanalyse/freiheit",
    "imageUrl": "freiheit-1830.jpg",
    "year": 1830,
    "tags": ["REVOLUTION", "19. JHD.", "FRANKREICH"],
    "focusTag": "SYMBOLBILD",
    "difficulty": 2,
    "shortText": "Das berühmteste Gemälde zur Julirevolution. Wer ist die Frau in der Mitte?"
  }
];

const CheckpointOverlay: React.FC<{ 
  checkpoint: FreiheitData.Checkpoint; 
  onSuccess: () => void; 
  onClose: () => void 
}> = ({ checkpoint, onSuccess, onClose }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [status, setStatus] = useState<'none' | 'wrong' | 'correct'>('none');

  const handleCheck = () => {
    if (selected === checkpoint.correctIndex) {
      setStatus('correct');
      setTimeout(onSuccess, 800);
    } else {
      setStatus('wrong');
      setTimeout(() => setStatus('none'), 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className={`max-w-xl w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all ${status === 'wrong' ? 'animate-shake border-4 border-red-500' : 'border-4 border-transparent'}`}>
        <div className="text-center space-y-4 mb-10">
          <span className={`bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full font-black text-[10px] uppercase tracking-widest`}>Wissens-Check</span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">{checkpoint.question}</h3>
        </div>
        <div className="space-y-3">
          {checkpoint.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center gap-4 ${
                selected === i ? `border-emerald-600 bg-emerald-50 text-emerald-900` : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
              }`}
            >
              <span className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${selected === i ? 'border-emerald-600' : 'border-slate-300'}`}>
                {selected === i && <div className="w-3 h-3 bg-emerald-600 rounded-full" />}
              </span>
              {opt}
            </button>
          ))}
        </div>
        {status === 'wrong' && <p className="mt-6 text-center text-red-500 font-bold animate-bounce">❌ Fast! Tipp: {checkpoint.hint}</p>}
        {status === 'correct' && <div className="mt-6 text-center text-green-500 font-black animate-pulse text-2xl">✅ Hervorragend!</div>}
        <div className="mt-10 flex gap-4">
          <button onClick={onClose} className="flex-1 py-5 rounded-2xl font-black uppercase text-[10px] text-slate-400 hover:bg-slate-50 transition-all">Abbrechen</button>
          <button disabled={selected === null || status === 'correct'} onClick={handleCheck} className={`flex-[2] bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-emerald-700 disabled:opacity-30 transition-all active:scale-95`}>Antwort prüfen</button>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<{ pages: PageEntry[], onNavigate: (path: string) => void }> = ({ pages, onNavigate }) => {
  const getPos = (year: number) => {
    const min = 1750, max = 2025;
    return 10 + ((year - min) / (max - min)) * 80;
  };
  const sortedPages = [...pages].sort((a, b) => a.year - b.year);
  return (
    <div className="w-full mb-20 mt-10 no-print overflow-visible px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-8 text-center md:text-left">Geschichtlicher Zeitstrahl</h2>
        <div className="relative h-2 bg-slate-200 rounded-full flex items-center">
          {sortedPages.map((page, idx) => (
            <div key={page.id} className="absolute cursor-pointer group" style={{ left: `${getPos(page.year)}%` }} onClick={() => onNavigate(page.path)}>
              <div className={`flex flex-col items-center absolute left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? 'bottom-5' : 'top-5'}`}>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white p-1 rounded-2xl shadow-xl border-2 border-white group-hover:scale-125 group-hover:border-emerald-500 transition-all duration-300 overflow-hidden">
                  <img 
                    src={assetUrl(page.imageUrl)} 
                    className={`w-full h-full object-cover rounded-xl ${CONTENT_REGISTRY[page.id]?.sensitivity?.classroomOption.defaultPreview === 'blurred' ? 'blur-md' : ''}`} 
                    alt={page.title} 
                    onError={() => console.warn("Bild lädt nicht (Timeline):", assetUrl(page.imageUrl))}
                  />
                </div>
                <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white mt-1 shadow-md"></div>
                <span className="text-[10px] font-black text-slate-900 mt-1 bg-white px-2 rounded-full shadow-sm">{page.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InteractiveText: React.FC<{ text: string, className?: string }> = ({ text, className = "text-slate-200 text-lg italic" }) => {
  const [expl, setExpl] = useState<{ w: string, t: string } | null>(null);
  const parts = text.split(/(\[\[.*?\]\])/g);
  return (
    <div className="relative">
      <p className={className}>
        {parts.map((p, i) => {
          if (p.startsWith('[[') && p.endsWith(']]')) {
            const inner = p.slice(2, -2);
            const [w, t] = inner.includes('|') ? inner.split('|') : [inner, "Keine Info"];
            return <span key={i} onClick={() => setExpl(expl?.w === w ? null : { w, t })} className="text-emerald-400 underline decoration-emerald-500/30 underline-offset-4 cursor-help px-1 font-bold hover:text-emerald-300 transition-colors">{w}</span>;
          }
          return <span key={i}>{p}</span>;
        })}
      </p>
      {expl && <div className="absolute top-full mt-2 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 text-slate-800 text-sm z-[250] w-64 animate-in fade-in zoom-in-95"><b>{expl.w}:</b> {expl.t}</div>}
    </div>
  );
};

const ZoomModal: React.FC<{ imageUrl: string, onClose: () => void }> = ({ imageUrl, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const handleZoom = (delta: number) => setZoom(prev => Math.min(Math.max(1, prev + delta), 4));
  const reset = () => { setZoom(1); setPosition({ x: 0, y: 0 }); };
  const onMouseDown = (e: React.MouseEvent) => { if (zoom <= 1) return; setIsDragging(true); setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y }); };
  const onMouseMove = (e: React.MouseEvent) => { if (!isDragging) return; setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y }); };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-300">
      <div className="absolute top-6 left-6 flex gap-4 z-[110]">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 flex gap-2">
          <button onClick={() => handleZoom(0.5)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-xl font-bold text-xl">+</button>
          <button onClick={() => handleZoom(-0.5)} className="w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-xl font-bold text-xl">−</button>
          <button onClick={reset} className="px-4 h-12 flex items-center justify-center text-white hover:bg-white/10 rounded-xl font-black text-[10px] uppercase">Reset</button>
        </div>
        <button onClick={onClose} className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl hover:bg-emerald-500 shadow-xl transition-all">✕</button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-white/70 text-[10px] font-black uppercase tracking-widest pointer-events-none">
        Zoom: {Math.round(zoom * 100)}% {zoom > 1 && "• Ziehen zum Bewegen"}
      </div>
      <div className={`w-full h-full flex items-center justify-center overflow-hidden cursor-${zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'}`} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={() => setIsDragging(false)} onMouseLeave={() => setIsDragging(false)}>
        <img 
          src={assetUrl(imageUrl)} 
          draggable={false} 
          className="max-w-full max-h-full object-contain transition-transform duration-200 select-none shadow-2xl" 
          style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})` }} 
          alt="Analysebild Zoom" 
          onError={() => console.warn("Bild lädt nicht (ZoomModal):", assetUrl(imageUrl))}
        />
      </div>
    </div>
  );
};

const BildanalyseApp: React.FC<{ onBack: () => void, page: PageEntry }> = ({ onBack, page }) => {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState<'level_easy' | 'level_medium' | 'level_hard'>('level_medium');
  const [ampel, setAmpel] = useState<null | string>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showWritingHelp, setShowWritingHelp] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1024);
  const [activeCheckpoint, setActiveCheckpoint] = useState<FreiheitData.Checkpoint | null>(null);
  const [userNotes, setUserNotes] = useState<Record<number, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem(`notes_${page.id}`);
    if (saved) setUserNotes(JSON.parse(saved));
    const savedAmpel = localStorage.getItem(`ampel_${page.id}`);
    if (savedAmpel) setAmpel(savedAmpel);
  }, [page.id]);

  const updateNote = (text: string) => {
    const newNotes = { ...userNotes, [step]: text };
    setUserNotes(newNotes);
    localStorage.setItem(`notes_${page.id}`, JSON.stringify(newNotes));
  };

  const handleAddStarter = (starter: string) => {
    const currentText = userNotes[step] || "";
    const cleanStarter = starter.replace(/\.\.\.$/, "");
    const newText = currentText ? (currentText.endsWith(" ") ? currentText + cleanStarter : currentText + " " + cleanStarter) : cleanStarter;
    updateNote(newText);
    setIsSidebarOpen(true);
  };

  const registryEntry = CONTENT_REGISTRY[page.id];
  const isNap = page.path.includes('napoleon');
  const isChe = page.path.includes('che');
  let steps: FreiheitData.AnalysisStep[] = [];
  let feedback = {};
  
  if (registryEntry) { steps = registryEntry.steps; feedback = registryEntry.ampelFeedback; } 
  else if (isNap) { steps = NapoleonData.NAPOLEON_STEPS; feedback = NapoleonData.AMPEL_FEEDBACK; } 
  else if (isChe) { steps = CheData.CHE_STEPS; feedback = CheData.AMPEL_FEEDBACK; }
  else { steps = FreiheitData.STEPS; feedback = FreiheitData.AMPEL_FEEDBACK; }
  
  const curr = steps[step] || steps[0];
  const activeContent = curr.content[level];
  const sensitivity = registryEntry?.sensitivity;

  const handleNextStep = () => { if (curr.checkpoint) setActiveCheckpoint(curr.checkpoint); else goToNext(); };
  const goToNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
      setShowHints(false);
      setShowWritingHelp(false);
      setActiveCheckpoint(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.print();
    }
  };

  const isTrafficLightStep = steps[step]?.title === "WAHRHEITSGEHALT" || steps[step]?.title === "QUELLENKRITIK" || steps[step]?.title === "GLAUBWÜRDIGKEIT";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-100 overflow-hidden">
      <nav className="no-print bg-white/80 backdrop-blur-md border-b p-3 md:p-4 flex justify-between items-center z-50 sticky top-0 shadow-sm">
        <button onClick={onBack} className="bg-slate-900 text-white px-3 md:px-5 py-2 rounded-xl font-black uppercase text-[10px] hover:bg-emerald-600 transition-all shadow-lg">← Galerie</button>
        <div className="flex gap-1 md:gap-2">
          {steps.map((_, i) => (
            <button key={i} onClick={() => { setStep(i); setShowHints(false); setShowWritingHelp(false); }} className={`w-7 h-7 md:w-11 md:h-11 rounded-xl font-black text-xs transition-all ${step === i ? 'bg-emerald-600 text-white shadow-xl scale-110' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}>{i + 1}</button>
          ))}
        </div>
        <button onClick={() => window.print()} className="bg-slate-100 text-slate-900 p-2.5 rounded-xl hover:bg-emerald-50"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg></button>
      </nav>

      <div className="flex flex-1 overflow-hidden relative">
        <main className="no-print flex-1 overflow-y-auto p-4 md:p-10 transition-all duration-500">
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <div className="flex justify-center"><div className="bg-slate-200/50 p-1.5 rounded-2xl flex gap-1">{['level_easy', 'level_medium', 'level_hard'].map((l) => (<button key={l} onClick={() => setLevel(l as any)} className={`px-3 md:px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${level === l ? 'bg-white shadow-md text-emerald-600' : 'text-slate-500 hover:text-slate-700'}`}>{l === 'level_easy' ? 'Easy' : l === 'level_medium' ? 'Normal' : 'Pro'}</button>))}</div></div>
            
            {/* Verkleinerter Header (Kleinere Anzeige des Bildes) */}
            <div onClick={() => setIsZoomOpen(true)} className="bg-slate-900 rounded-[2rem] p-4 md:p-6 text-center relative overflow-hidden h-40 md:h-56 flex flex-col justify-center border-b-4 border-slate-950 shadow-2xl cursor-zoom-in group">
              <img 
                src={assetUrl(page.imageUrl)} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xl group-hover:opacity-40 transition-opacity" 
                alt={page.title} 
                onError={() => console.warn("Bild lädt nicht (BG-Blur):", assetUrl(page.imageUrl))}
              />
              <div className="relative z-10 space-y-2">
                <span className="bg-emerald-600 text-[8px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full text-white">SCHRITT {step + 1} VON {steps.length}</span>
                <h2 className="text-xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">{curr.title}</h2>
                <p className="text-emerald-400 font-black uppercase text-[10px] md:text-sm italic tracking-widest opacity-80">{curr.subtitle}</p>
                <div className="mt-2 flex justify-center"><div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all text-lg">🔍</div></div>
              </div>
            </div>

            {sensitivity && !isRevealed ? (
              <div className="bg-white rounded-[2rem] p-6 md:p-16 border-2 border-slate-100 text-center space-y-8 shadow-2xl mt-4 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto text-3xl">⚠️</div>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{isChe ? "Politisch aufgeladen" : "Sensitiver Inhalt"}</h3>
                <p className="text-slate-500 font-medium italic">{sensitivity.warning}</p>
                <button onClick={() => setIsRevealed(true)} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase shadow-xl hover:bg-emerald-700">{sensitivity.classroomOption.revealButtonText}</button>
              </div>
            ) : (
              <>
                <p className="text-base md:text-xl font-black text-slate-800 text-center leading-snug px-4">{activeContent.description}</p>
                {activeContent.contextText && (<div className="p-5 md:p-6 bg-sky-900 text-sky-100 rounded-[1.5rem] shadow-xl border-l-8 border-emerald-500 italic"><InteractiveText text={activeContent.contextText} className="text-sm md:text-base italic leading-relaxed" /></div>)}
                <div className="grid gap-3">{activeContent.points.map((p, i) => (<div key={i} className="flex gap-4 items-start bg-white p-4 md:p-6 rounded-[1.2rem] border border-slate-100 hover:border-emerald-200 transition-all shadow-sm group"><span className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-slate-50 border-2 border-slate-100 flex items-center justify-center font-black text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all text-xs">{i + 1}</span><InteractiveText text={p} className="text-sm md:text-lg font-bold text-slate-700 leading-tight pt-1" /></div>))}</div>

                {/* Ampel Interaktion */}
                {isTrafficLightStep && (
                  <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-10 text-center border-b-8 border-slate-950 shadow-2xl space-y-8">
                     <h4 className="text-white font-black uppercase text-[10px] tracking-widest opacity-60 italic">Glaubwürdigkeits-Bewertung</h4>
                     <div className="flex justify-center gap-6 md:gap-10">
                        {['red', 'yellow', 'green'].map((color) => (
                          <button key={color} onClick={() => setAmpel(color)} className={`w-12 h-12 md:w-20 md:h-20 rounded-full border-[4px] md:border-[6px] transition-all active:scale-75 ${color === 'red' ? 'bg-red-600' : color === 'yellow' ? 'bg-yellow-400' : 'bg-green-500'} ${ampel === color ? 'border-white scale-125 shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'border-black/30 opacity-30 grayscale'}`} />
                        ))}
                     </div>
                     {ampel && (
                        <div className={`mt-8 p-4 bg-slate-800 rounded-xl font-bold text-xs md:text-sm text-slate-300 italic animate-in zoom-in-95 duration-300 ${
                          (feedback as any)[ampel].includes('RICHTIG') ? 'border-green-500 text-green-100' :
                          (feedback as any)[ampel].includes('TEILWEISE') ? 'border-yellow-500 text-yellow-100' :
                          'border-red-500 text-red-100'
                        }`}>
                          { (feedback as any)[ampel] }
                        </div>
                      )}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <div className="space-y-2"><button onClick={() => setShowHints(!showHints)} className="w-full bg-slate-900 text-white rounded-[1.2rem] p-4 flex justify-between items-center hover:bg-slate-800 shadow-lg border-b-4 border-black"><span className="font-black uppercase text-[10px] tracking-widest flex items-center gap-3">🔍 Tipps</span><span className={`transition-transform ${showHints ? 'rotate-180' : ''}`}>▼</span></button>{showHints && (<div className="bg-amber-50 rounded-[1.2rem] p-4 border-2 border-amber-100 space-y-2 animate-in slide-in-from-top-4">{activeContent.hints.map((h, i) => <div key={i} className="bg-white p-3 rounded-lg text-[10px] text-slate-600 italic border border-amber-50">★ {h}</div>)}</div>)}</div>
                   <div className="space-y-2"><button onClick={() => setShowWritingHelp(!showWritingHelp)} className="w-full bg-emerald-600 text-white rounded-[1.2rem] p-4 flex justify-between items-center hover:bg-emerald-700 shadow-lg border-b-4 border-emerald-900"><span className="font-black uppercase text-[10px] tracking-widest flex items-center gap-3">💡 Schreibhilfe</span><span className={`transition-transform ${showWritingHelp ? 'rotate-180' : ''}`}>▼</span></button>{showWritingHelp && (<div className="bg-emerald-50 rounded-[1.2rem] p-4 border-2 border-emerald-100 space-y-2 animate-in slide-in-from-top-4"><p className="text-[9px] font-black uppercase text-emerald-400 mb-2">Satzanfang anklicken:</p><div className="flex flex-wrap gap-2">{activeContent.sentenceStarters.map((s, i) => (<button key={i} onClick={() => handleAddStarter(s)} className="bg-white px-2 py-1.5 rounded-lg text-[9px] text-emerald-900 font-bold italic border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all shadow-sm">„{s}“</button>))}</div></div>)}</div>
                </div>
                <div className="flex justify-between items-center py-6 pb-24"><button disabled={step === 0} onClick={() => { setStep(prev => prev - 1); setShowHints(false); setShowWritingHelp(false); }} className="px-5 py-3 rounded-xl border-2 font-black uppercase text-[9px] text-slate-400 disabled:opacity-0 hover:bg-slate-100 transition-all">Zurück</button><button onClick={handleNextStep} className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-black uppercase text-[9px] shadow-xl hover:bg-emerald-700 active:scale-95 border-b-4 border-emerald-900">{step < steps.length - 1 ? 'Nächster Schritt' : 'Drucken & Fertig'}</button></div>
              </>
            )}
          </div>
        </main>

        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`no-print fixed bottom-6 right-6 md:static z-200 bg-slate-900 text-white w-14 h-14 md:w-10 md:h-auto md:py-8 md:px-1 rounded-full md:rounded-l-2xl shadow-2xl transition-all duration-300 hover:bg-emerald-600 flex flex-col items-center justify-center gap-4 ${isSidebarOpen ? 'md:translate-x-full opacity-0' : ''}`}><span className="text-xl">📝</span><span className="hidden md:block [writing-mode:vertical-lr] font-black uppercase text-[10px] tracking-widest rotate-180">Notizen</span></button>
        
        {/* Sidebar mit sehr hohem Z-Index, um über dem Zoom-Modal zu bleiben */}
        <aside className={`fixed inset-y-0 right-0 md:static bg-white border-l shadow-2xl transition-all duration-500 z-[250] flex flex-col h-full ${isSidebarOpen ? 'w-full md:w-[400px]' : 'w-0 translate-x-full opacity-0 pointer-events-none'}`}>
          <div className="p-4 border-b flex justify-between items-center bg-slate-50/50"><h3 className="font-black uppercase text-[10px] tracking-widest text-slate-900 flex items-center gap-3"><span className="bg-slate-900 text-white p-2 rounded-lg text-sm">📝</span> Notizen • Schritt {step+1}</h3><button onClick={() => setIsSidebarOpen(false)} className="text-slate-400 hover:text-slate-900 p-2 text-2xl">✕</button></div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6"><div className="bg-yellow-50 rounded-[1.5rem] p-5 border-2 border-yellow-100 shadow-inner flex flex-col min-h-[300px]"><textarea value={userNotes[step] || ""} onChange={(e) => updateNote(e.target.value)} placeholder={`Erkenntnisse hier festhalten...`} className="w-full flex-grow bg-transparent border-none focus:ring-0 text-slate-800 font-bold text-base md:text-lg resize-none placeholder:text-yellow-600/30 leading-relaxed custom-scrollbar" style={{ backgroundImage: 'linear-gradient(transparent, transparent 31px, #e5e7eb 31px)', backgroundSize: '100% 32px', lineHeight: '32px' }} /></div>
            
            <div className="space-y-3 pt-6">
              <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b pb-2">Verlauf</h4>
              {steps.map((s, idx) => {
                if (!userNotes[idx]) return null;
                const isActive = idx === step;
                return (
                  <div key={idx} className={`p-3 rounded-xl border transition-all cursor-pointer ${isActive ? "bg-emerald-50 border-emerald-200" : "bg-white border-slate-100 opacity-60"}`} onClick={() => setStep(idx)}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[8px] font-black uppercase text-slate-400">{s.title}</p>
                      <span className="text-[8px] font-black text-emerald-400">SCHRITT {idx + 1}</span>
                    </div>
                    <p className="text-[10px] italic text-slate-600 line-clamp-2">{userNotes[idx]}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-4 border-t bg-slate-50/50"><button onClick={() => window.print()} className="w-full bg-slate-900 text-white py-3 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-emerald-600 shadow-xl">Protokoll drucken</button></div>
        </aside>
      </div>

      {isZoomOpen && <ZoomModal imageUrl={page.imageUrl} onClose={() => setIsZoomOpen(false)} />}
      {activeCheckpoint && <CheckpointOverlay checkpoint={activeCheckpoint} onSuccess={goToNext} onClose={() => setActiveCheckpoint(null)} />}

      <div className="hidden print:block">
        <Infographic ampelChoice={ampel as any} steps={steps as any} level={level} title={page.title} artist={page.subtitle} year={page.year.toString()} imageUrl={page.imageUrl} feedback={feedback as any} userNotes={userNotes} />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<string | null>(null);
  useEffect(() => { const h = () => setView(window.location.hash.replace('#', '') || null); window.addEventListener('hashchange', h); h(); return () => window.removeEventListener('hashchange', h); }, []);
  const active = PAGES_DATA.find(p => p.path === view);
  const sortedGallery = useMemo(() => [...PAGES_DATA].sort((a, b) => a.year - b.year), []);
  if (view && active) return <BildanalyseApp page={active} onBack={() => window.location.hash = ''} />;
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-emerald-100 overflow-x-hidden">
      <header className="py-20 md:py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <h1 className="text-6xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-none mb-6 text-slate-900 animate-in slide-in-from-top-10 duration-1000 relative z-10">Visual History</h1>
        <div className="w-24 md:w-32 h-3 bg-emerald-600 mx-auto rounded-full mb-8 relative z-10"></div>
        <p className="text-slate-900 font-black uppercase tracking-[0.4em] text-[12px] md:text-lg mb-2 relative z-10">Bildanalyse an der BoWi</p>
        <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs opacity-60">Interaktives Dossier für den Geschichtsunterricht</p>
      </header>
      <main className="max-w-7xl mx-auto p-4 md:p-12 space-y-24 mb-32">
        <Timeline pages={PAGES_DATA} onNavigate={(p) => window.location.hash = p} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {sortedGallery.map((p, idx) => {
            const isBlurred = CONTENT_REGISTRY[p.id]?.sensitivity?.classroomOption.defaultPreview === 'blurred';
            return (
              <div key={p.id} onClick={() => window.location.hash = p.path} className="group cursor-pointer space-y-8 animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white p-2.5 bg-white shadow-2xl group-hover:shadow-[0_20px_60px_-15px_rgba(5,150,105,0.3)] transition-all duration-500 group-hover:-translate-y-4 relative">
                  <div className="w-full h-full relative overflow-hidden rounded-[2rem]">
                    <img 
                      src={assetUrl(p.imageUrl)} 
                      className={`w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-95 group-hover:scale-110 ${isBlurred ? 'blur-2xl' : ''}`} 
                      alt={p.title} 
                      onError={() => console.warn("Bild lädt nicht (Gallery):", assetUrl(p.imageUrl))}
                    />
                    {isBlurred && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                         <div className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-2"><span>⚠️</span> Sensitiver Inhalt</div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <span className="text-white font-black uppercase text-[10px] tracking-widest bg-emerald-600 px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Analyse starten</span>
                    </div>
                  </div>
                </div>
                <div className="px-4 text-center">
                  <div className="flex justify-center mb-4"><span className="text-[10px] font-black bg-emerald-50 px-5 py-2 rounded-full uppercase text-emerald-600 border border-emerald-100 shadow-sm">{p.year}</span></div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-emerald-600 transition-colors leading-tight">{p.title}</h3>
                  <p className="text-slate-500 mt-4 italic font-medium text-sm leading-relaxed line-clamp-2 px-4 opacity-80 group-hover:opacity-100">{p.shortText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="py-24 border-t border-slate-100 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
          <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-xl">B</div>
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">&copy; {new Date().getFullYear()} • Bodenstedt- / Wilhelmschule Peine • VISUAL HISTORY v2.5</p>
        </div>
      </footer>
    </div>
  );
};
export default App;
