import React from 'react';
import { assetUrl } from '../../types';
import { AnalysisStep } from '../freiheitfuehrtvolk';

interface InfographicProps {
  ampelChoice?: 'red' | 'yellow' | 'green' | null;
  steps?: AnalysisStep[];
  level: 'level_easy' | 'level_medium' | 'level_hard';
  title?: string;
  artist?: string;
  year?: string;
  imageUrl?: string;
  feedback?: { red: string; yellow: string; green: string };
  userNotes?: Record<number, string>;
}

export const Infographic: React.FC<InfographicProps> = ({ 
  ampelChoice = null, 
  steps = [], 
  level = 'level_medium',
  title = "Unbekanntes Werk", 
  artist = "Unbekannter Künstler", 
  year = "o.D.", 
  imageUrl = "", 
  feedback = { red: "Kritisch", yellow: "Neutral", green: "Glaubwürdig" },
  userNotes = {}
}) => {
  return (
    <div className="bg-white p-6 max-w-[210mm] mx-auto min-h-[297mm] flex flex-col gap-4 text-slate-900 font-sans print:m-0 print:p-4">
      {/* Header */}
      <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">Bildanalyse Protokoll</h1>
          <p className="text-[8px] font-black text-indigo-600 uppercase tracking-[0.4em]">Visual History • Digitale Lernmappe • {level === 'level_easy' ? 'Easy' : level === 'level_medium' ? 'Normal' : 'Pro'}</p>
        </div>
        <div className="text-right text-[8px] font-black uppercase text-slate-300">
          <p>Datum: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </div>

      {/* Main Info Box */}
      <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
        <div className="w-24 h-20 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden rounded-lg">
           <img src={assetUrl(imageUrl || '')} alt={title} className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-lg font-black uppercase leading-none tracking-tight mb-1">{title}</h2>
          <p className="text-[10px] font-bold text-slate-500 italic">{artist} • {year}</p>
        </div>
      </div>

      {/* Die 6 Schritte Ergebnisse */}
      <div className="grid grid-cols-2 gap-3 flex-1">
        {steps.map((s, idx) => (
          <div key={idx} className="break-inside-avoid flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center font-black text-[9px]">{idx + 1}</span>
              <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-400">{s.title}</h3>
            </div>
            <div className="flex-1 bg-white p-3 rounded-xl border border-slate-200 text-[10px] leading-tight italic text-slate-700 font-medium min-h-[60px]">
              {userNotes[idx] ? userNotes[idx] : <span className="opacity-20 italic">Keine Notizen zu Schritt {idx+1} ({s.content[level].description.substring(0, 20)}...)</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Ampel & Fazit */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center gap-6 shadow-lg">
         <div className="flex gap-2">
            <div className={`w-6 h-6 rounded-full border-2 border-white/20 ${ampelChoice === 'red' ? 'bg-red-500' : 'bg-white/5'}`}></div>
            <div className={`w-6 h-6 rounded-full border-2 border-white/20 ${ampelChoice === 'yellow' ? 'bg-yellow-400' : 'bg-white/5'}`}></div>
            <div className={`w-6 h-6 rounded-full border-2 border-white/20 ${ampelChoice === 'green' ? 'bg-green-500' : 'bg-white/5'}`}></div>
         </div>
         <div className="flex-1">
            <h4 className="text-[8px] font-black uppercase text-indigo-400 tracking-widest mb-1">Quellenkritische Bewertung (Glaubwürdigkeit)</h4>
            <p className="text-[10px] font-medium italic text-slate-200 leading-snug">
              {ampelChoice ? (feedback as any)[ampelChoice] : "Keine Ampel-Bewertung vorgenommen."}
            </p>
         </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-100 flex justify-between items-center opacity-30">
        <p className="text-[7px] font-black uppercase tracking-widest">Visual History v2.5</p>
        <div className="flex gap-4 text-[7px] font-black italic uppercase">
          <p>Name: ______________________</p>
          <p>Klasse: ______</p>
        </div>
      </div>
    </div>
  );
};
