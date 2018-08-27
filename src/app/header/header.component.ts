import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IHeader} from '../common/interfaces';
import {StoreService} from '../common/store.service';
import {Observable} from 'rxjs';
import {e} from '../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: Observable<string[]>;
  header: IHeader;
  constructor(private router: Router, private store: StoreService) { }

  ngOnInit() {
     const subscription = this.store.header.subscribe(header => this.header = header,
                                                      error => console.log(error));

     this.menu = this.store.menu;
  }

}
