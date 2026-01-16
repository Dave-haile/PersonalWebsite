export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
  }
  
  export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
  }
  
  export interface InteractiveLetterProps {
    char: string;
  }
  
  export interface InteractiveTitleProps {
    textLines: string[];
  }
  