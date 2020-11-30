import dude from "../assets/dude.png";

export enum StageType {
  RIDDLE,
  CHALLENGE,
  PHOTO,
  AUDIO,
}

export type Stage = {
  type: StageType;
  riddle?: Riddle;
  challenge?: Challenge;
  photo?: Photo;
  audio?: Audio;
};

export type Riddle = {
  clue: string;
  hint: string;
  location: string;
  code: string;
};

export type Challenge = {
  group: boolean;
  task: string;
};

export type Photo = {
  image: string;
};

export type Audio = {
  sound: HTMLAudioElement;
};

export const stages: Stage[] = [
  {
    type: StageType.AUDIO,
    audio: {
      sound: new Audio(
        "https://www.soundjay.com/mechanical/sounds/chainsaw-03.mp3"
      ),
    },
  },
  {
    type: StageType.PHOTO,
    photo: {
      image: dude,
    },
  },
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
      group: true,
      task: "Do 5 star jumps",
    },
  },
];
