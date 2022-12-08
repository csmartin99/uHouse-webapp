import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { Savedad } from 'src/app/shared/models/savedads.model';
import { User } from 'src/app/shared/models/user.model';
import { PropertyComponent } from '../property/property.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  property: Observable<Property> | null=null; 
  auth: boolean | any;
  propertyTemp: Observable<Property[]> | any;
  sellerDataTemp: Observable<User[]> | any;
  propertyHide: Observable<Property[]> | any;
  id = "";
  srcaddress = "";
  email = "";
  seller = "";
  userid = "";
  sellerData: Observable<User> | any;
  propertyData: Observable<User> | any;
  propObj: Property | any;
  userTemp: User | any;

  constructor(private fs: FbCrudService, private aroute: ActivatedRoute, private dialog: MatDialog, private authentication: AuthenticationService) {
   }

  ngOnInit(): void {
    var p = this.aroute.snapshot.params;
    this.id = p['id'];
    this.auth = this.authentication.isAuthenticated;
    if (this.auth) {
      this.email = this.authentication.userData;
      this.userid = this.authentication.currentUserId;
    }
    this.getProperty();
    this.getSellerUsername();

    this.fs.getUserByEmail("users", this.email).pipe(map(users => {
      return users.map(u => {
        const usr: User = {
          id: u.id,
          userid: u.userid,
          useremail: u.useremail,
          username: u.username,
          like: u.like,
          dislike: u.dislike,
          report: u.report,
          comments: u.comments,
          savedads: u.savedads
        }
        return usr
      })
    }))
    .subscribe(data=>this.userTemp=data);
  }

  getProperty(): void {
    this.property = this.fs.getOne('properties', this.id);

    this.propertyTemp = this.fs.getUser('properties').pipe(map(props => props.filter(prop => prop.id == this.id))).subscribe(result => {if (result) {
      result.forEach((doc) => {
        this.propertyData = doc;
      });
    }});
  }

  getSellerUsername(): void {
    this.sellerDataTemp = this.fs.getUser("users").pipe(map(users => users.filter(user => user.useremail == this.propertyData.seller))).subscribe(result => {if (result) {
      result.forEach((doc) => {
        if (doc) {
          this.sellerData = doc;
        }
      });
    }});
  }

  deleteListing(paramid: string): void {
    this.fs.delete('properties', paramid);
  }

  updateListing(): void{
    const dialogR = this.dialog.open(UpdateComponent, {height:'70%',width:'40%'});
    dialogR.afterClosed().subscribe(result => {
      if (result) {
        this.fs.update('properties', this.id, result);} });
  }

  saveListing(adid: string): void {
    let array: string[] = [];

    this.userTemp[0].savedads.forEach((element: string) => {
      array.push(element);
    });
    if(!array.includes(adid)){
      array.push(adid);
    }
    this.fs.updateSaved("users", this.userTemp[0].id, array);
  }
}
