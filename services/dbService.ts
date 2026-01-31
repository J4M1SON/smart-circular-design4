
import { createClient } from '@supabase/supabase-js';
import { TransformationResult } from '../types';

// Estes valores seriam injetados via variáveis de ambiente em produção
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

const isConfigured = SUPABASE_URL && SUPABASE_ANON_KEY;
const supabase = isConfigured ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const LOCAL_STORAGE_KEY = 'smart_circular_history';

export const dbService = {
  /**
   * Salva uma nova transformação no banco de dados ou localStorage
   */
  async saveTransformation(result: TransformationResult): Promise<void> {
    try {
      if (supabase) {
        const { error } = await supabase
          .from('transformations')
          .insert([result]);
        
        if (error) throw error;
      } else {
        // Fallback robusto para LocalStorage
        const existing = await this.getTransformations();
        const updated = [result, ...existing];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      }
    } catch (error) {
      console.error('Erro ao salvar no banco de dados:', error);
      // Garante que pelo menos no local o dado seja mantido em caso de erro no cloud
      const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([result, ...existing]));
    }
  },

  /**
   * Busca todas as transformações salvas
   */
  async getTransformations(): Promise<TransformationResult[]> {
    try {
      if (supabase) {
        const { data, error } = await supabase
          .from('transformations')
          .select('*')
          .order('createdAt', { ascending: false });
        
        if (error) throw error;
        return data || [];
      } else {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        return data ? JSON.parse(data) : [];
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      const data = localStorage.getItem(LOCAL_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    }
  }
};
