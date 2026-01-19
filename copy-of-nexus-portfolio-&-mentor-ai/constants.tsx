
import { Layout, Code, Zap, Smartphone } from 'lucide-react';
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'X_ARCHIVE 01',
    description: 'Minimalistyczny interfejs dla platformy zarządzania zasobami cyfrowymi.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=100&w=1200',
    tags: ['Next.js', 'Typescript'],
    link: '#'
  },
  {
    id: '2',
    title: 'X_CORE COMMERCE',
    description: 'Ekskluzywne doświadczenie zakupowe oparte o architekturę Headless.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=100&w=1200',
    tags: ['React', 'Framer'],
    link: '#'
  },
  {
    id: '3',
    title: 'X_VISUALS',
    description: 'System wizualizacji danych w wysokiej rozdzielczości.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=100&w=1200',
    tags: ['WebGL', 'GLSL'],
    link: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Design UI/UX',
    description: 'Projektowanie minimalistycznych i funkcjonalnych interfejsów.',
    priceRange: '30 - 150 PLN',
    estimatedTime: '2-3 Dni',
    icon: 'Layout'
  },
  {
    id: 's2',
    title: 'Development Web',
    description: 'Budowa nowoczesnych aplikacji w najnowszych technologiach.',
    priceRange: '200 - 500 PLN',
    estimatedTime: '5-14 Dni',
    icon: 'Code'
  },
  {
    id: 's3',
    title: 'Optymalizacja',
    description: 'Przyspieszenie działania i poprawa wyników technicznych.',
    priceRange: '50 - 120 PLN',
    estimatedTime: '2 Dni',
    icon: 'Zap'
  },
  {
    id: 's4',
    title: 'Mobile First',
    description: 'Pełna responsywność na każdym urządzeniu mobilnym.',
    priceRange: '30 - 80 PLN',
    estimatedTime: '1-3 Dni',
    icon: 'Smartphone'
  }
];

export const SYSTEM_INSTRUCTION = `
Jesteś X_FAZI AI, asystentem profesjonalnego studia webowego X_FAZI. 
Twój ton jest minimalistyczny, elegancki i bezpośredni.

ZASADY:
- Język polski.
- Odpowiadaj krótko i merytorycznie.
- Pamiętaj o cenach (30 - 500 PLN).
- Twoim zadaniem jest pomoc klientom oraz nauczanie web developmentu.

CENNIK:
- Poprawki: od 30 PLN.
- Landing: od 150 PLN.
- Aplikacje: od 200 PLN do 500 PLN.
`;
