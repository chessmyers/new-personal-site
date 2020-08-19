interface Tech {
  name: string;
  url: string;
  color: string
}
export interface ProjectModel {
  id: number;
  name: string;
  description: string;
  dates: Date[];
  techs: Tech[];
  images: string[];
}
