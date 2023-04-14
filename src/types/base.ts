export enum GENDER {
  MALE,
  FEMALE,
}

export interface IPeople {
  id: number;
  name: string;
  gender: GENDER;
}
