interface Tech {
  name: string;
  url: string;
  color: string;
}
export interface ProjectModel {
  id: number;
  name: string;
  shortBlurb: string;
  description: string;
  dates: [Date, Date | null];
  color: string;
  techs: Tech[];
  images: string[];
  website: string | null;
  source: string | null;
}
