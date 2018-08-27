import { Injectable } from '@angular/core';
import {MockHeader, MockNavMenu} from './header-data.mock';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  isInitialized: boolean;
  constructor() { }

  get header() {
    return of(MockHeader);
  }
  get menu() {
    return of(MockNavMenu);
  }

  formFields() {
    return of()
  }


}
