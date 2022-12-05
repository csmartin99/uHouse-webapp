import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.scss']
})
export class MyadsComponent implements OnInit {
  properties: Observable<Property[]> | any;
  userid: string | any;
  @Input() property?: Property;

  constructor(private fs: FbCrudService, private authentication: AuthenticationService) {
    this.userid = this.authentication.currentUserId;
  }

  ngOnInit(): void {
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.seller == this.userid)));
  }

}
