import { Injectable } from '@angular/core';
import {StoreService} from '../../common/store.service';
import {GENRES, MODELS, PROFICIENCIES, TYPE_A, TYPE_B} from './form-data.mock';
import {IProficiencyChoices, IValue} from '../../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  typeA: IValue[];
  typeB: IValue[];
  genres: IValue[];
  models: IValue[];
  proficiencies: IProficiencyChoices[];
  constructor(private store: StoreService) {
    this.typeA = TYPE_A;
    this.typeB = TYPE_B;
    this.models = MODELS;
    this.genres = GENRES;
    this.proficiencies = PROFICIENCIES;
  }
}
