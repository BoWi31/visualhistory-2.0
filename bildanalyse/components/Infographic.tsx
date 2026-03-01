import React from 'react';
import { assetUrl } from '../../types';
import { AnalysisStep } from '../freiheitfuehrtvolk';

interface InfographicProps {
  steps?: AnalysisStep[];
  level: 'level_easy' | 'level_medium' | 'level_hard';
  title?: string;
  artist?: string;
  year?: string;
  imageUrl?: string;
  userNotes?: Record<number, string>;
}

export const Infographic: React.FC<InfographicProps> = ({ 
  steps = [], 
  level = 'level_medium',
  title = "Unbekanntes Werk", 
  artist = "Unbekannter Künstler", 
  year = "o.D.", 
  imageUrl = "", 
  userNotes = {}
}) => {
  return (
    <div className="bg-white p-10 max-w-[210mm] mx-auto min-h-[297mm] flex flex-col gap-8 text-slate-900 font-sans print:m-0 print:p-10 print:w-full print:h-screen print:overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @page { size: A4; margin: 0; }
        @media print {
          body { background: white; }
          .print-grid { height: calc(100vh - 300px); }
        }
      `}} />
      
      {/* Header: Bild und Titel */}
      <div className="flex gap-10 items-center border-b-4 border-slate-900 pb-8">
        <div className="w-56 h-40 flex-shrink-0 border-4 border-white shadow-xl overflow-hidden rounded-3xl bg-slate-100">
           <img 
             src={assetUrl(imageUrl || '')} 
             alt={title} 
             className="w-full h-full object-cover" 
             onError={() => {
               if (imageUrl === 'hitler1939.jpg') {
                 console.warn("Bild lädt nicht (Infografik):", assetUrl(imageUrl));
               }
             }}
           />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-black uppercase tracking-tighter leading-tight mb-2">{title}</h1>
          <p className="text-xl font-bold text-slate-500 italic">{artist} • {year}</p>
          <div className="mt-4 flex gap-4">
             <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Bildanalyse Protokoll</span>
             <span className="border-2 border-slate-200 text-slate-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Niveau: {level === 'level_easy' ? 'Easy' : level === 'level_medium' ? 'Normal' : 'Pro'}</span>
          </div>
        </div>
      </div>

      {/* Die 6 Kästen der Analyse */}
      <div className="grid grid-cols-2 gap-6 flex-1 print-grid">
        {steps.slice(0, 6).map((s, idx) => (
          <div key={idx} className="break-inside-avoid flex flex-col border-2 border-slate-100 rounded-[2.5rem] p-8 bg-slate-50/30">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-lg shadow-lg">{idx + 1}</span>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900">{s.title}</h3>
            </div>
            <div className="flex-1 text-sm leading-relaxed italic text-slate-700 font-medium whitespace-pre-wrap">
              {userNotes[idx] ? userNotes[idx] : <span className="opacity-20 italic text-slate-300">Keine Notizen zu diesem Analyseschritt...</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-8 border-t-2 border-slate-100 flex justify-between items-center">
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <p>Name: _________________________________</p>
          <p>Klasse: ___________</p>
          <p>Datum: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-200">Visual History v2.5</p>
      </div>
    </div>
  );
};
