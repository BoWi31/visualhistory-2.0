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
  studentName?: string;
}

const LABELS = {
  protocol: 'Bildanalyse Protokoll',
  level: 'Niveau',
  name: 'Name',
  class: 'Klasse',
  date: 'Datum',
  noNotes: 'Keine Notizen zu diesem Analyseschritt...'
};

export const Infographic: React.FC<InfographicProps> = ({ 
  steps = [], 
  level = 'level_medium',
  title = "Unbekanntes Werk", 
  artist = "Unbekannter Künstler", 
  year = "o.D.", 
  imageUrl = "", 
  userNotes = {},
  studentName = ""
}) => {
  const l = LABELS;

  return (
    <div className="bg-white p-6 md:p-10 max-w-[210mm] mx-auto min-h-[297mm] flex flex-col gap-4 md:gap-6 text-slate-900 font-sans print:m-0 print:p-8 print:w-full print:h-screen print:overflow-hidden ltr" dir="ltr">
      <style dangerouslySetInnerHTML={{ __html: `
        @page { size: A4; margin: 0; }
        @media print {
          body { background: white; -webkit-print-color-adjust: exact; }
          .print-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 1rem !important; }
          .infographic-container { height: 100vh; display: flex; flex-direction: column; }
        }
        .ltr { direction: ltr; text-align: left; }
      `}} />
      
      {/* Header: Bild und Titel */}
      <div className="flex gap-6 md:gap-10 items-center border-b-4 border-slate-900 pb-4 md:pb-6 flex-row">
        <div className="w-40 h-28 md:w-56 md:h-40 flex-shrink-0 border-4 border-white shadow-lg overflow-hidden rounded-2xl bg-slate-100">
           <img 
             src={assetUrl(imageUrl || '')} 
             alt={title} 
             className="w-full h-full object-cover" 
           />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-1 md:mb-2">{title}</h1>
          <p className="text-lg md:text-xl font-bold text-slate-500 italic">{artist} • {year}</p>
          <div className="mt-2 md:mt-4 flex gap-3 md:gap-4">
             <span className="bg-slate-900 text-white px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest">{l.protocol}</span>
             <span className="border-2 border-slate-200 text-slate-400 px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest">{l.level}: {level === 'level_easy' ? 'Einfach' : level === 'level_medium' ? 'Mittel' : 'Profi'}</span>
          </div>
        </div>
      </div>

      {/* Die 6 Kästen der Analyse */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 flex-1 print-grid">
        {steps.slice(0, 6).map((s, idx) => (
          <div key={idx} className="break-inside-avoid flex flex-col border-2 border-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 bg-slate-50/30">
            <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4 flex-row">
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-base md:text-lg shadow-md">{idx + 1}</span>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-900">{s.title}</h3>
            </div>
            <div className="flex-1 text-xs md:text-sm leading-relaxed italic text-slate-700 font-medium whitespace-pre-wrap">
              {userNotes[idx] ? userNotes[idx] : <span className="opacity-20 italic text-slate-300">{l.noNotes}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 md:pt-6 border-t-2 border-slate-100 flex justify-between items-center flex-row">
        <div className="flex gap-6 md:gap-10 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 flex-row">
          <p>{l.name}: {studentName ? <span className="text-slate-900 border-b border-slate-900 px-2">{studentName}</span> : "____________________"}</p>
          <p>{l.class}: ___________</p>
          <p>{l.date}: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-200">Visual History v2.5</p>
      </div>
    </div>
  );
};
