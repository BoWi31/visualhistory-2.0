import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export type Language = 'de' | 'en' | 'ru' | 'sq';

export const LANGUAGES: Record<Language, { label: string, flag: string }> = {
  de: { label: 'Deutsch', flag: '🇩🇪' },
  en: { label: 'English', flag: '🇬🇧' },
  ru: { label: 'Русский', flag: '🇷🇺' },
  sq: { label: 'Shqip', flag: '🇦🇱' }
};

export async function translateText(text: string, targetLang: Language): Promise<string> {
  if (targetLang === 'de' || !text) return text;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Translate the following German text to ${LANGUAGES[targetLang].label}. Keep the tone educational and formal. Maintain any special formatting like [[word|explanation]].\n\nText: ${text}`,
    });
    return response.text || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

export async function translateObject<T>(obj: T, targetLang: Language): Promise<T> {
  if (targetLang === 'de') return obj;

  const jsonString = JSON.stringify(obj);
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Translate the following JSON object values from German to ${LANGUAGES[targetLang].label}. 
      Keep the keys exactly the same. 
      Maintain the structure. 
      Keep the tone educational. 
      For strings containing [[word|explanation]], translate both the word and the explanation.
      
      JSON: ${jsonString}`,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    const translatedText = response.text;
    if (translatedText) {
      return JSON.parse(translatedText);
    }
    return obj;
  } catch (error) {
    console.error("Object translation error:", error);
    return obj;
  }
}
