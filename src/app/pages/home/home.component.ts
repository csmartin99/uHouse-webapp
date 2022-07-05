import { Component, OnDestroy, OnInit } from '@angular/core';
import { PROPERTY } from 'src/app/shared/database/property.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  view = '';
  selltype? = '';
  properties = PROPERTY;
  constructor() { }

  ngOnInit(): void {
    this.view = 'home';
    this.selltype = 'forsale';
  }

  ngOnDestroy(): void {
    delete this.selltype;
  }

}
