
export interface Instrument {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'Viento' | 'Cuerda' | 'Teclado' | 'Percusión';
}

export interface SheetMusic {
  id: string;
  title: string;
  etapa?: 'Precatecumenado' | 'Liturgia' | 'Catecumenado' | 'Elección';
  indice?: 'Adviento' | 'Navidad' | 'Pascua/Pentecostés' | 'Cantos a la Virgen';
  eucaristia?: 'Entrada' | 'Paz' | 'Fracción del Pan' | 'Comunión con el Cáliz' | 'Final';
  difficulty: 'Fácil' | 'Media' | 'Avanzada';
}

export type AppView = 'home' | 'instruments' | 'sheets';
