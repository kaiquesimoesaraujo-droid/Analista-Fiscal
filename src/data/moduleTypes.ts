export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type TrainingModule = {
  slug: string;
  order: number;
  title: string;
  summary: string;
  level: string;
  estimatedTime: string;
  lastReviewed: string;
  transitional?: boolean;
  heroImage: string;
  imageAlt: string;
  learningGoals: string[];
  submodules: { title: string; topics: string[] }[];
  sections: { title: string; type?: "conceito" | "atencao" | "exemplo" | "base-legal"; body: string[] }[];
  examples: { title: string; scenario: string; steps: string[]; legalBasis: string }[];
  commonMistakes: string[];
  checklist: string[];
  quiz: QuizQuestion[];
  references: string[];
  validationNotes: string[];
};
