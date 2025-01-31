export interface Case {
  details: {
    situation: string;
    thoughts: string;
    distortions: string[];
    emotions: string;
    behaviour: string;
  };
  date: Date;
}