import { Component, OnInit } from '@angular/core';

export interface Property {
  name: string;
  size: number;
  address: string;
}

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
