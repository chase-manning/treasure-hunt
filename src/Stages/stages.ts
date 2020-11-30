export enum StageType {
  RIDDLE,
  CHALLENGE,
}

export type Stage = {
  type: StageType;
  riddle?: Riddle;
  challenge?: Challenge;
};

export type Riddle = {
  clue: string;
  hint: string;
  location: string;
  code: string;
};

export type Challenge = {
  task: string;
};

export const stages: Stage[] = [
  {
    type: StageType.RIDDLE,
    riddle: {
      clue: "A Catnap About Bulk",
      hint: "Anagram",
      location: "Takapuna Boat Club",
      code: "1234",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      task: "Do 5 star jumps",
    },
  },
];
