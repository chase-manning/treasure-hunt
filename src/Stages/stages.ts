export enum StageType {
  RIDDLE,
  CHALLENGE,
}

export type Stage = {
  type: StageType;
};

export const stages: Stage[] = [
  {
    type: StageType.CHALLENGE,
  },
  {
    type: StageType.RIDDLE,
  },
];
