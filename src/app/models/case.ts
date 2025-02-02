// TODO: tech-debt: separate interfaces for UI and DB models

export interface Case {
  details: {
    situation: string;
    thoughts: string;
    distortions: string[];
    emotions: string;
    behaviour: string;
  };
  dateTime: Date;
}