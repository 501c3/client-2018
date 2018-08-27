import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {IParticipant} from './participant';
import {ParticipantService} from './participant.service';
import {ICheckBox, IProficiencyChoices, ISelect, IValue} from '../../common/interfaces';
import {FormBuilder, FormGroup} from '@angular/forms';




@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit, OnChanges {
  @Input('participant')
  participant: IParticipant;
  form: FormGroup;
  typeA: IValue[];
  typeB: IValue[];
  models: ICheckBox[];
  proficiencies: ISelect[];
  constructor(private service: ParticipantService, private fb: FormBuilder) {
  }

  onChange(idx, checked) {
     this.models[idx].selected = checked;
  }


  get diagnosticA() {
    return JSON.stringify(this.form.getRawValue());
  }

  get diagnosticB() {
    return JSON.stringify(this.participant);
  }

  ngOnInit() {
    this.typeA = this.service.typeA;
    this.typeB = this.service.typeB;
    this.models = this.service.models.map((value: IValue) => ({id: value.id, name: value.name, selected: false})) ;
    this.proficiencies =
      this.buildSelects(null, null, null,
        this.service.genres, this.service.proficiencies);
    let idx = 0;
    const genres = {};
    this.service.genres.forEach(value => {genres[value['name']] = this.proficiencies[idx].options[0]; idx++; });
    // TODO: Build controls;
    this.form = this.fb.group({
      id: ['', []],
      first: ['', []],
      last: ['', []],
      years: ['', []],
      sex: ['', []],
      typeA: ['', []],
      typeB: ['', []],
      models: this.fb.array(this.models),
      proficiencies: this.fb.group(genres)
    });
  }

  ngOnChanges(changes: SimpleChanges ) {
    console.log(changes);
  }

  private buildSelects(
    model: IValue|null,
    typeA: IValue|null,
    typeB: IValue|null,
    genres: IValue[],
    choices: IProficiencyChoices[]): ISelect[] {
    const idx = choices.findIndex(
      ( choice =>
        (choice.model === model)
        && (choice.typeA === typeA)
        && (choice.typeB === typeB )));
    const rec = choices[idx];
    const selects: ISelect[] = [];
    for (const genre of genres) {
      selects.push({ select: genre,
                     options: rec['proficiencies']});
    }
    return selects;
  }

  newParticipant(): IParticipant {
    const participant: IParticipant = {
      id: null,
      first: '',
      last: '',
      years: null,
      sex: '',
      models: [],
      typeA: null,
      typeB: null,
      proficiencies: []
    };
    return participant;
  }
}
