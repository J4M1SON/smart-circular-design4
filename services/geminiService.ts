
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const transformPlanToCircular = async (idea: string): Promise<string> => {
  if (!API_KEY) throw new Error("API key not configured");

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const prompt = `
    Aja como um consultor sênior em Economia Circular e Design Regenerativo.
    Transforme a seguinte ideia de negócio tradicional em um modelo de Economia Circular avançado.
    
    Ideia Original: "${idea}"
    
    Sua resposta deve seguir esta estrutura rigorosa em Markdown:
    
    ### 1. Visão Geral Regenerativa
    Descreva como este negócio pode restaurar ecossistemas em vez de apenas extrair recursos.
    
    ### 2. Estratégia de Eliminação de Resíduos
    Explique como o design elimina o conceito de lixo desde a origem (Upcycling, Biodegradabilidade, etc.).
    
    ### 3. Circulação de Produtos e Materiais
    Proponha modelos de Servitização (PaaS), Logística Reversa ou Manutenção Preditiva.
    
    ### 4. Impacto ESG e Viabilidade Econômica
    Destaque como isso gera lucro sustentável e conformidade com métricas globais de ESG.
    
    Mantenha um tom profissional, inovador e tecnologicamente avançado. Use termos técnicos como "LCA", "Cradle to Cradle" e "Circular Economy".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text || "Não foi possível gerar a estratégia circular.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Falha ao processar o plano de IA.");
  }
};
