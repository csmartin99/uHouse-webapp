import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { MENUOPTIONS } from 'src/app/shared/database/menu.database';
import { Property } from 'src/app/shared/models/property.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  view = '';
  selltype? = '';
  properties: Observable<Property[]> | any;
  menuoptions = MENUOPTIONS;
  constructor(private service: FbCrudService) { }

  ngOnInit(): void {
    this.view = 'home';
    this.selltype = 'forsale';
    this.getData();
  }

  ngOnDestroy(): void {
    delete this.selltype;
  }

  getData(): void {
    this.properties = this.service.get("properties");
    //this.properties = this.service.queryDescByPrice("properties");
  }
}
