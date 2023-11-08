import { Url } from "url";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface Img {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  role: string;
  mainImage: Img;
  backgroundInformation: string;
  phoneNumber: string;
  email: string;
  location: string;
  socials: Social[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Img;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  jobTitle: string;
  companyImage: Img;
  company: string;
  dateStarted: date;
  dateEnded: date;
  isCurrentJob: boolean;
  keyLearnings: string[];
  skills: Skill[];
}

export interface Project extends SanityBody {
  _type: "project";
  id: number;
  status: string;
  title: string;
  demoImage: Img;
  summary: string;
  skills: Skill[];
  link: Url;
}
