import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  properties: Observable<Property[]> | any;

  constructor(private fs: FbCrudService) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.properties = this.fs.get("properties");
  }

}
