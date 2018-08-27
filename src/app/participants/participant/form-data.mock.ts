import {IProficiencyChoices, IValue} from '../../common/interfaces';

export const TYPE_A: IValue[] =
  [
    {id: 1, name: 'Amateur', abbr: 'A'},
    {id: 2, name: 'Professional', abbr: 'P'},
  ];
export const TYPE_B: IValue[] =
  [
    {id: 3, name: 'Student', abbr: 'S'},
    {id: 4, name: 'Teacher', abbr: 'T'}
  ];

export const MODELS: IValue[] =
  [
    {id: 1, name: 'ISTD Medal Exams', abbr: 'ME'},
    {id: 2, name: 'Georgia DanceSport Amateur', abbr: 'Am'},
    {id: 3, name: 'Georgia DanceSport ProAm', abbr: 'TS'}
  ];

export const ON_DATE = 'on Dec 31, 2018';

export const GENRES: IValue[] =
  [
    {id: 1, name: 'Standard', abbr: 'Std'},
    {id: 2, name: 'Latin', abbr: 'Ltn'},
    {id: 3, name: 'Smooth', abbr: 'Sm'},
    {id: 4, name: 'Rhythm', abbr: 'Rhy'}
  ] ;

const ALL_PROFICIENCIES: IValue[] =
  [
    {id: null, name: 'Not Entered', abbr: 'NE'},
    {id: 1, name: 'Bronze', abbr: 'B'},
    {id: 2, name: 'Silver', abbr: 'S'},
    {id: 3, name: 'Gold', abbr: 'G'},
    {id: 4, name: 'Novice', abbr: 'N'},
    {id: 5, name: 'Pre Championship', abbr: 'PC'},
    {id: 6, name: 'Chapionship', abbr: 'C'},
    {id: 7, name: 'Rising Star', abbr: 'RS'},
    {id: 8, name: 'Professional', abbr: 'P'}
  ];

const AMATEUR_PROFICIENCIES: IValue[] =
  [
    {id: null, name: 'Not Entered', abbr: 'NE'},
    {id: 1, name: 'Bronze', abbr: 'B'},
    {id: 2, name: 'Silver', abbr: 'S'},
    {id: 3, name: 'Gold', abbr: 'G'},
    {id: 4, name: 'Novice', abbr: 'N'},
    {id: 5, name: 'Pre Championship', abbr: 'PC'},
    {id: 6, name: 'Championship', abbr: 'C'}
  ];

const PRO_PROFICIENCIES: IValue[] =
  [
    {id: null, name: 'Not Entered', abbr: 'NE'},
    {id: 7, name: 'Rising Star', abbr: 'RS'},
    {id: 8, name: 'Professional', abbr: 'P'}
  ];



export const PROFICIENCIES: IProficiencyChoices[] =
  [
    {model: null,
      typeA: null,
      typeB: null,
      proficiencies: AMATEUR_PROFICIENCIES},
    {model: {id: 1, name: 'ISTD Medal Exams', abbr: 'ME'},
      typeA: {id: 1, name: 'Amateur', abbr: 'A'},
      typeB: {id: 3, name: 'Student', abbr: 'S'},
      proficiencies: AMATEUR_PROFICIENCIES},
    {model: {id: 2, name: 'Georgia DanceSport Amateur', abbr: 'Am'},
      typeA: {id: 2, name: 'Professional', abbr: 'P'},
      typeB: {id: 4, name: 'Teacher', abbr: 'T'},
      proficiencies: PRO_PROFICIENCIES},
    {model: {id: 3, name: 'Georgia DanceSport ProAm', abbr: 'TS'},
      typeA: {id: 1, name: 'Amateur', abbr: 'A'},
      typeB: {id: 3, name: 'Student', abbr: 'S'},
      proficiencies: AMATEUR_PROFICIENCIES}
  ];
