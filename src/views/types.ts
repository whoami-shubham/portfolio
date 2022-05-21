export interface Url {
  label: string;
  src: string;
}
export interface ExperienceProps {
  title: string;
  org: string;
  duration: string;
  imgUrl: string;
  location: string;
  description: string[];
  urls: Url[];
}

export interface EducationProps {
  id: number;
  imgUrl: string;
  content: string;
}

export interface ProjectProps {
  id: number;
  name: string;
  url: string;
  demo: string;
  isDemo?: boolean;
  lib?: boolean;
  imgUrl: string;
  content: string;
  react?: boolean;
}

export interface ArticleProps {
  id: number;
  title: string;
  url: string;
  imgUrl: string;
  content: string;
}

export interface CtaProps {
  bio: string;
  imgUrl:string;
  name:string;
  links: {
    linkedin: string;
    github: string;
    stackoverflow: string;
    quora: string;
    twitter: string;
    facebook: string;
    gmail: string;
  };
  message: string;
}

export interface ApiResponse {
  cta: CtaProps;
  educations: EducationProps[];
  exp: ExperienceProps[];
  projects: ProjectProps[];
  articles: ArticleProps[];
  resumeUrl:string;
}
