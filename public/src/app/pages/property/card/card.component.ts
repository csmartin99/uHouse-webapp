import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/shared/models/property.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() property?: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
