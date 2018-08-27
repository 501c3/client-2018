import { Component, OnInit } from '@angular/core';
import {IParticipant} from './participant/participant';
import {ParticipantsService} from './participants.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  list$: Observable<IParticipant[]>;
  length$: Observable<number>;
  participant: IParticipant;
  constructor(private service: ParticipantsService) { }

  ngOnInit() {
    this.service.init();
    this.list$ = this.service.list$;
    this.length$ = this.service.length$;
  }

  onDelete(participant: IParticipant) {
    console.log('Delete: ' + JSON.stringify(participant));
  }

  onEdit(participant: IParticipant) {
    console.log('Edit: ' + JSON.stringify(participant));
  }

  // get diagnostic() { return JSON.stringify(this.list$); }

}
