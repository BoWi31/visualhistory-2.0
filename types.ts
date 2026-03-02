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
  // Entferne führende ./ oder /
  let cleanFile = file;
  if (cleanFile.startsWith('./')) {
    cleanFile = cleanFile.slice(2);
  }
  if (cleanFile.startsWith('/')) {
    cleanFile = cleanFile.slice(1);
  }
  
  // Sicherstellen, dass baseUrl mit / endet und cleanFile nicht mit / beginnt
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanFile}`;
};
