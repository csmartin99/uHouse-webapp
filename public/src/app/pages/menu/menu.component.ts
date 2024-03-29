import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PROPERTY } from 'src/app/shared/database/property.database';
import { AddComponent } from '../add/add.component';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from 'src/app/shared/models/property.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  properties = PROPERTY;
  deletableProperties: Observable<Property[]> | any;
  getnow: Number | any;
  tenminutes: Number | any;
  userid: string | any;
  useremail: string | any;
  constructor(private dialog: MatDialog, private fs: FbCrudService, private router: Router, private authentication: AuthenticationService) {
    this.userid = this.authentication.currentUserId;
    this.useremail = this.authentication.userData;
  }

  logout(): void {
    this.router.navigateByUrl('home');
    this.authentication.signOut();
  }

  current(): void {
    //console.log(this.authentication.isAuthenticated);
    //console.log(this.authentication.currentUserId);
    //console.log(this.authentication.userData);
  }

  showDialog(): void{
    const dialogR = this.dialog.open(AddComponent, {height:'70%',width:'40%'});
    dialogR.afterClosed().subscribe(result => {
      if (result) {
        if (this.authentication.isAuthenticated) {
          result.temp = "0";
          result.seller = this.authentication.userData;
        } else if (!this.authentication.isAuthenticated) {
          result.temp = "1";
          result.seller = "none";
        }
        result.created = Date.now();
        result.hidden = "0";
        this.fs.add("properties", result);} });
  }

  ngOnInit(): void {
    this.getnow = Date.now();
    this.useremail = this.authentication.userData;
    this.userid = this.authentication.currentUserId;
    console.log(this.userid);
    //Törli a (jelenleg 10 percél) régebbi ideiglenes hirdetéseket (600000 ms)
    this.deletableProperties = this.fs.get("properties").pipe(map(props => props.filter(prop => (prop.temp == "1" && (prop.created!+600000) < this.getnow))))
    .subscribe(result => {if (result) {
      result.forEach((doc) => {
        console.log(this.getnow - doc.created!);
        this.fs.delete('properties', doc.id);
      });
    }});
  }
}
