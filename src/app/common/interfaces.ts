export interface IValue {
  id: number;
  name: string;
  abbr: string;
}

export interface IHeader {
  image: string;
  competition: string;
  date: string;
  location: string;
}

export interface IGenreProficiency {
  genre: IValue|null;
  proficiency: IValue|null;
  years: number|null;
}

export interface IProficiencyChoices {
  model: IValue|null;
  typeA: IValue|null;
  typeB: IValue|null;
  proficiencies?: IValue[];
}

export interface IParticipant {
  id: number|null;
  first: string;
  last: string;
  years: number|null;
  sex: string;
  models: IValue[]|null;
  typeA: IValue|null;
  typeB: IValue|null;
  proficiencies: IGenreProficiency[]|null;
}

export interface ICheckBox {
  id: number;
  name: string;
  selected: boolean;
}

export interface IOption {
  domId: number;
  domText: string;
}

export interface ISelect {
  select: IValue;
  options: IValue[];
}
