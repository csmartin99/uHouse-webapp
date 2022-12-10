import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  columnNames = ["name","address","price","area","rooms","created","edit","status"];
  dataSource = new MatTableDataSource<Property>();
  properties: Observable<Property[]> | any;
  userid: string | any;
  @Input() property?: Property;

  constructor(private fs: FbCrudService, private authentication: AuthenticationService) {
    this.userid = this.authentication.currentUserId;
  }

  ngOnInit(): void {
    this.userid = this.authentication.currentUserId;
    console.log(this.userid);
    if(this.userid) {
      this.properties = this.fs.get("properties")
      .pipe(map(props => props.filter(prop => prop.seller == this.authentication.userData)));
    }
  }

  hideListing(id: string, hidden: string): void {
    this.fs.updateHidden("properties", id, hidden);
  }

}
