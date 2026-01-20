
export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  imageUrl: string;
}
