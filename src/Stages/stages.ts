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
      clue: "Where the cat is not brown",
      location: "In the Carpark",
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
