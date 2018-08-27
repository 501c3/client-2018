import {Component, OnInit} from '@angular/core';
import {StoreService} from './common/store.service';
import {NavigationService} from './common/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  priorDisabled = false;
  nextDisabled = false;
  constructor(private store: StoreService, private navigation: NavigationService) {}

  onMenuLink() {
    return this.navigation.onMenuLink();
  }

  get priorEnabled() {
    return !this.navigation.onMenuFirst();
  }

  get lastEnabled() {
    return !this.navigation.onMenuLast();
  }

  onPrior() {
    this.navigation.prior();
  }

  onNext() {
    this.navigation.next();
  }

  ngOnInit() {
     this.navigation.init();
  }
}
