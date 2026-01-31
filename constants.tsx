
import { Instrument, SheetMusic } from './types';

export const INSTRUMENTS: Instrument[] = [
  {
    id: '1',
    name: 'Guitarra',
    category: 'Cuerda',
    description: 'El alma rítmica de la asamblea.',
    imageUrl: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '2',
    name: 'Charango',
    category: 'Cuerda',
    description: 'Sonoridad alegre y brillante.',
    imageUrl: 'https://images.unsplash.com/photo-1628108429314-87729864273f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '3',
    name: 'Castañuelas',
    category: 'Percusión',
    description: 'Acento festivo para la danza.',
    imageUrl: 'https://images.unsplash.com/photo-1628527302488-422849927909?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '4',
    name: 'Percusión',
    category: 'Percusión',
    description: 'El latido del corazón comunitario.',
    imageUrl: 'https://images.unsplash.com/photo-1543443258-92b04ad5ecf5?auto=format&fit=crop&q=80&w=1200'
  }
];

export const SALMOS: SheetMusic[] = [
  { id: 's1', title: 'Hacia ti levanto mis ojos', etapa: 'Precatecumenado', eucaristia: 'Entrada', difficulty: 'Fácil' },
  { id: 's2', title: 'El Señor es mi pastor', etapa: 'Precatecumenado', eucaristia: 'Comunión con el Cáliz', difficulty: 'Media' },
  { id: 's3', title: 'Misericordia mío, Dios mío', etapa: 'Liturgia', indice: 'Adviento', difficulty: 'Fácil' },
  { id: 's4', title: 'Día de reposo', etapa: 'Catecumenado', eucaristia: 'Paz', difficulty: 'Media' },
  { id: 's5', title: 'María, pequeña María', etapa: 'Elección', indice: 'Cantos a la Virgen', eucaristia: 'Final', difficulty: 'Fácil' },
  { id: 's6', title: 'Secuencia de Pascua', etapa: 'Elección', indice: 'Pascua/Pentecostés', eucaristia: 'Entrada', difficulty: 'Avanzada' },
  { id: 's7', title: 'A ti levanto mi alma', etapa: 'Precatecumenado', indice: 'Adviento', eucaristia: 'Entrada', difficulty: 'Fácil' },
  { id: 's8', title: 'Bendeciré al Señor', etapa: 'Liturgia', eucaristia: 'Paz', difficulty: 'Media' },
  { id: 's9', title: 'Gloria a Dios en lo alto del cielo', indice: 'Navidad', eucaristia: 'Entrada', difficulty: 'Media' },
  { id: 's10', title: 'Cordero de Dios', eucaristia: 'Fracción del Pan', difficulty: 'Media' },
];
