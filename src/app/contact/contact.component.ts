import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {concatMap, exhaustMap, filter, map} from 'rxjs/operators';
import {fromEvent, of} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('submitButton') submitButton: ElementRef;
  form: any;
  contact: any;
  constructor(fb: FormBuilder) {
     this.form = fb.group({
       id: ['', []],
       title: ['', []],
       first: ['', [Validators.required, Validators.minLength(1)]],
       middle: ['', []],
       last: ['', [Validators.required, Validators.minLength(1)]],
       suffix: ['', []],
       email: ['', []],
       repeat: ['', []],
       city: ['', []],
       st: ['', []],
       country: ['', []],
       postal: ['', []],
       organization: ['', []]
     });

     this.form.valueChanges.pipe(
          // filter(() => this.contactForm.valid),
          map(contact => console.log(contact)))
       .subscribe(contact => this.contact = contact);  //
  }

  get diagnostic() {
    return JSON.stringify(this.contact);
  }

  ngOnInit() {
    // const observable = this.contactForm.valueChanges;
    //
    // const subscription = observable.subscribe();

     // .subscribe(changes => {
        // const saveCourse$ =fromPromise(fetch(`/sales/competition`, {
        //   method: 'PUT',
        //   body: JSON.stringify(changes),
        //   headers: {'content-type': 'application/json'}
        // })}));
   }

  ngAfterViewInit() {
     fromEvent(this.submitButton.nativeElement, 'click')
        .pipe(
            // concatMap(() => this.save(this.contactForm.value))
              exhaustMap(() => this.submit(this.form.value))
        );
  }


   submit(changes) {
      console.log(changes);
      // TODO: Save to store.
      return of(observer => {observer.next(changes); observer.complete(); } );
   }
}
