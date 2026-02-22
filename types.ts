export interface PageEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  imageUrl: string;
  thumbUrl?: string;
  year: number;
  tags: string[];
  focusTag: string;
  difficulty: 1 | 2 | 3;
  shortText: string;
  comparisonTarget?: string; // ID des Bildes für den Vergleich
}

export interface ConfigData {
  title: string;
  subtitle: string;
  pages: PageEntry[];
}

/**
 * Erzeugt eine robuste URL für statische Assets.
 * Geht davon aus, dass die Dateien im Root des Deployments (public Ordner im Build) liegen.
 */
export const assetUrl = (file: string): string => {
  if (!file) return '';
  // Falls es bereits eine absolute URL ist, nichts tun
  if (file.startsWith('http') || file.startsWith('data:')) return file;
  
  // Dateiname bereinigen (Pfad-Präfixe wie ./ oder / entfernen)
  const fileName = file.split('/').pop() || file;
  
  // Base URL von Vite oder Standard-Root /
  const baseUrl = (window as any).importMetaBaseUrl || '/';
  
  return `${baseUrl}${fileName}`;
};
