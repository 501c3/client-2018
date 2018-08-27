import { Injectable } from '@angular/core';
import {PARTICIPANT_LIST} from './participants.mock';
import {ParticipantService} from './participant/participant.service';
import {Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';
import {IParticipant} from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  list$: Observable<IParticipant[]>;
  length$: Observable<number>;
  constructor(private service: ParticipantService) { }

  init() {
    this.list$ = Observable.create( observer => {
      observer.next(PARTICIPANT_LIST);
      observer.complete();
    }).pipe(  tap(() => console.log('http executed.')),
              map((data: any) => {
                      const arr = [];
                      for (const rec of data ) {
                        arr.push(rec);
                      }
                      return arr;
                    }
               ),
               shareReplay()
    );
    this.length$ = Observable.create( observer => {
      observer.next(PARTICIPANT_LIST.length);
      observer.complete();
    });
  // this.list$.subscribe(
  //     data => console.log(data),  noop, () => console.log('completed')
  // );
  //   const list = PARTICIPANT_LIST;
  //   list.forEach(data => {
  //     const participant = this.createParticipant(data);
  //     this.list.push(participant);
  //     });
   }


  // removeParticipant(id: number) {
  //   const idx = this.list.findIndex(item => item.id === id);
  //   this.list = this.list.splice(idx, 1 );
  // }
  //
  // updateParticipant(data: any) {
  //   const idx = this.list.findIndex(item => item.id === data.id);
  //   const participant = this.list[idx];
  //   participant.update(data);
  // }
  //
  // add(participant: Participant) {
  //   this.list.push(participant);
  // }
}
