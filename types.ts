
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  estimatedTime: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
