import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { map, filter, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  properties: Observable<Property[]> | any;
  propertiesFiltered: Observable<Property[]> | any;
  also: string | any;
  alsoarea: string | any;
  stext: string | any;
  sprice1: string | any;
  sprice2: string | any;
  sarea1: string | any;
  sarea2: string | any;
  scity: string | any;
  spremium: any;
  public props: Property[] = [];

  constructor(private fs: FbCrudService) { }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(): void {
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.hidden != "1")));
  }

  searchTextChanged(stext: string) {
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.name.toLowerCase().includes(stext.toLowerCase()))));
  }

  searchPrice1Changed(sprice1: string) {
    this.also = sprice1;
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.price > Number(sprice1))));
  }

  searchPrice2Changed(sprice2: string) {
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => (prop.price < Number(sprice2) && prop.price > Number(this.also)))));
  }

  searchArea1Changed(sarea1: string) {
    this.alsoarea = sarea1;
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.price > Number(sarea1))));
  }

  searchArea2Changed(sarea2: string) {
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => (prop.price < Number(sarea2) && prop.price > Number(this.alsoarea)))));
  }

  searchCityChanged(scity: string) {
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.address?.toLowerCase().includes(scity.toLowerCase()))));
  }

  searchPremiumChanged(spremium: string) {
    if (spremium) {
      this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.premium == "Yes")));
    } else {
      this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.premium == "Yes" || prop.premium == "No")));
    }
  }

}
