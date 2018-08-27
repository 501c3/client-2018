import {IGenreProficiency, IValue} from '../../common/interfaces';

export interface IParticipant {
   id: number|null;
   first: string;
   last: string;
   years: number;
   sex: string;
   models: IValue[];
   typeA: IValue;
   typeB: IValue;
   proficiencies: IGenreProficiency[];
}

