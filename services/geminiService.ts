import { GoogleGenAI } from "@google/genai";

export const getCareerAdvice = async (interests: string) => {
  try {
    // Initializing with process.env.API_KEY directly as per guidelines.
    // Creating fresh instance to ensure correct API key selection if applicable.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User interests: ${interests}. Recommend which of our courses (Film Making, Graphic Design, Digital Marketing) fits best and provide a "Creative Roadmap". Return as a short paragraph.`,
      config: {
        systemInstruction:
          "You are a career counselor for Dramantram Academy. Be concise, futuristic, and encouraging. Focus on industry impact.",
        temperature: 0.7,
      },
    });

    // Directly accessing .text property as it is a getter, not a method.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The creative oracle is currently offline. Please contact our human advisors at headquarters.";
  }
};
