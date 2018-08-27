import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MockNavMenu} from './header-data.mock';
import {Observable, of} from 'rxjs';
import {StoreService} from './store.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  navigation: string[];
  current: string;
  constructor(private router: Router, private route: ActivatedRoute, private store: StoreService) { }



  init() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const _current = event.url.substr(1);
          this.current = this.navigation.includes(_current) ? _current : null;
        }
      });
    this.navigation = MockNavMenu;
  }

  prior() {
    const index = this.navigation.indexOf(this.current);
    if ( index <= -1 || index == null) {
      return null;
    }

    if ( index > 0 ) {
      this.router.navigateByUrl('/' + this.navigation[index - 1]);
    }

  }

  next() {
    const index = this.navigation.indexOf(this.current);
    if (index <= -1 || index == null) {
      return null;
    }
    if (index < this.navigation.length - 1) {
      this.router.navigateByUrl('/' + this.navigation[index + 1]);
    }
  }

  onMenuLink() {
    return !!this.current;
  }

  onMenuFirst() {
    return this.current === this.navigation[0];
  }

  onMenuLast() {
    const last = this.navigation.length - 1;
    return this.current === this.navigation[last];
  }

  get menu() {
    return this.navigation;
  }
}
