
export type AppView = 'home' | 'instruments' | 'sheets';

export interface Instrument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  // Fix: Added optional category property to match data in constants.tsx
  category?: string;
}

export interface SheetMusic {
  id: string;
  title: string;
  etapa?: 'Precatecumenado' | 'Liturgia' | 'Catecumenado' | 'Elección';
  indice?: 'Adviento' | 'Navidad' | 'Pascua/Pentecostés' | 'Cantos a la Virgen';
  eucaristia?: 'Entrada' | 'Paz' | 'Fracción del Pan' | 'Comunión con el Cáliz' | 'Final';
  // Fix: Added optional difficulty property to match data in constants.tsx
  difficulty?: string;
}
