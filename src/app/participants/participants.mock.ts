import {IParticipant} from '../common/interfaces';

export const PARTICIPANT_LIST: IParticipant[] =
  [
    {
       id: 1, first: 'First01', last: 'Last01', years: 10, sex: 'm',
       idModels: [3], idTypeA: 1, idTypeB: 1,
       proficiencies: [
                  {idStyle: 1, idProficiency: 1, years: 10},
                  {idStyle: 2, idProficiency: 2, years: 10},
                  {idStyle: 3, idProficiency: 3, years: 10}
               ]
    },
    {
        id: 2, first: 'First02', last: 'Last02', years: 14, sex: 'f',
        idModels: [3], idTypeA: 1, idTypeB: 1,
        proficiencies:
            [
                  {idStyle: 1, idProficiency: 1, years: 12},
                  {idStyle: 2, idProficiency: 2, years: 12},
                  {idStyle: 3, idProficiency: 3, years: 12}
            ]
    },
    {
      id: 3, first: 'First03', last: 'Last03', years: 18, sex: 'm',
      idModels: [3], idTypeA: 2, idTypeB: 2,
      proficiencies:
        [
          {idStyle: 1, idProficiency: 1, years: 20},
          {idStyle: 1, idProficiency: 2, years: 20}
        ]
    }
  ];
