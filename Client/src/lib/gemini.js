import { GoogleGenAI , HarmCategory } from "@google/genai";


const safetySettings = [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_LOW_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_LOW_AND_ABOVE",
    },
  ];
  

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const genai = new GoogleGenAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY)

const model = genai.getGenerativeModel({model: "gemini-1.5-flash",
   safetySettings: safetySettings
});


export default model