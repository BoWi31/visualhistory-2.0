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
 * Erzeugt eine robuste URL für statische Assets aus dem /public Verzeichnis.
 * Nutzt import.meta.env.BASE_URL für korrekte Pfade auch in Unterverzeichnissen.
 */
export const assetUrl = (file: string): string => {
  if (!file) return '';
  if (file.startsWith('http') || file.startsWith('data:')) return file;
  
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanFile = file.startsWith('/') ? file.slice(1) : file;
  return `${baseUrl}${cleanFile}`;
};
