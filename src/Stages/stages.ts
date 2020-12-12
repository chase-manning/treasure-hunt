import dude from "../assets/dude.png";
import bikes from "../assets/bikes.png";

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
  location: string;
  clue: string;
  hint: string;
  code: string;
};

export type Challenge = {
  group: boolean;
  task: string;
};

export type Photo = {
  location: string;
  image: string;
  hint: string;
  code: string;
};

export type Audio = {
  location: string;
  sound: HTMLAudioElement;
  hint: string;
  code: string;
};

export const stages: Stage[] = [
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Hamster Wheel",
      clue: "8,1,13,19,20,5,18 23,8,5,5,12",
      hint: "1=A",
      code: "2938",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Do a full 360 including going upside down",
    },
  },
  {
    type: StageType.AUDIO,
    audio: {
      location: "Tree Stump",
      sound: new Audio(
        "https://www.soundjay.com/mechanical/sounds/chainsaw-03.mp3"
      ),
      hint: "Tree Stump",
      code: "9149",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: true,
      task: "Go down the biggest slide at the park",
    },
  },
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Shower",
      clue: "... .... --- .-- . .-.",
      hint: "Morse",
      code: "1034",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Have a shower",
    },
  },
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Defibrillator",
      clue: "N3 W20",
      hint: "Shower => Direction => Steps",
      code: "8710",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Do a backflip off a swing",
    },
  },
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Takapuna Boat Club",
      clue: "A Catnap About Bulk",
      hint: "Anagram",
      code: "1234",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task:
        "Stand at the front of the biggest boat reinact the 'I'm Flying' Titanic Scene",
    },
  },
  {
    type: StageType.PHOTO,
    photo: {
      location: "Bike Sign",
      image: bikes,
      hint: "Franc's",
      code: "1901",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Walk across the letters",
    },
  },
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Giant Owl",
      clue: "巨大なフクロウ",
      hint: "Starbucks",
      code: "1773",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Let the Owl give you a shoulder ride",
    },
  },
  {
    type: StageType.PHOTO,
    photo: {
      location: "Man Statue",
      image: dude,
      hint: "Servilles",
      code: "9823",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Get a photo of a stranger posing with the statue",
    },
  },
  //Liquor Store
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Library",
      clue: "Building with the most stories",
      hint: "Stories has two meanings",
      code: "8872",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Let everyone dress you, then get a library card",
    },
  },
  // Library leading to tennis court
  // Cannons
  {
    type: StageType.AUDIO,
    audio: {
      location: "The Elephant Wrestler",
      sound: new Audio(
        "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-audio-hero/audio_hero_ElephantsTrumpetAn_TE016001_344.mp3?_=2"
      ),
      hint:
        "Ha ha ha It's an Elephant, bet you wrestled with that one for a while!",
      code: "8112",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: true,
      task:
        "Buy the person taller than you a drink, tallest buys shortest, could be time for payback?",
    },
  },
  //Cannons
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Lake Pupuke",
      clue: "-36.7853104, 174.7672319",
      hint: "Jetty",
      code: "3456",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Dunk your head underwater",
    },
  },
  {
    type: StageType.RIDDLE,
    riddle: {
      location: "Pools",
      clue: "P+🏫-sch",
      hint: "Swimming",
      code: "1827",
    },
  },
  {
    type: StageType.CHALLENGE,
    challenge: {
      group: false,
      task: "Go in and ask if you are allowed to swim naked",
    },
  },
  //Treasure
];
