
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

class GeminiService {
  private chatInstance: Chat | null = null;

  /**
   * Initializes or returns the existing chat session.
   * Uses process.env.API_KEY directly as required by guidelines.
   */
  private getChat() {
    if (!this.chatInstance) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      this.chatInstance = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }
    return this.chatInstance;
  }

  /**
   * Sends a message to the model and returns the response text.
   */
  async sendMessage(message: string): Promise<string> {
    try {
      const chat = this.getChat();
      // chat.sendMessage is used for multi-turn conversation.
      const response: GenerateContentResponse = await chat.sendMessage({ message });
      // Correctly accessing the .text property (not a method call).
      return response.text || "I'm sorry, I couldn't process that.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An error occurred while connecting to the AI. Please try again later.";
    }
  }

  /**
   * Resets the chat history by clearing the current instance.
   */
  resetChat() {
    this.chatInstance = null;
  }
}

export const geminiService = new GeminiService();
