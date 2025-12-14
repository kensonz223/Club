import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
    // Ideally this comes from a secure backend proxy in a real production app
    // to avoid exposing the key, but for this demo structure we use env.
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
        console.warn("API_KEY is missing. Chat features will not work.");
    }
    return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): Chat => {
    if (chatSession) return chatSession;

    const ai = getClient();
    chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        },
    });
    return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    try {
        const chat = initializeChat();
        const response: GenerateContentResponse = await chat.sendMessage({ message });
        return response.text || "抱歉，我現在無法回答，請稍後再試。";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "系統繁忙，請稍後再試，或直接聯繫管理處。";
    }
};
