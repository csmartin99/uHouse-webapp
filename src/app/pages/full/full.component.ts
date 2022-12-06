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
   
  propertyTemp: Observable<Property[]> | any;
  sellerDataTemp: Observable<User[]> | any;
  propertyHide: Observable<Property[]> | any;
  id = "";
  srcaddress = "";
  seller = "";
  sellerData: Observable<User> | any;
  propertyData: Observable<User> | any;

  constructor(private fs: FbCrudService, private aroute: ActivatedRoute, private dialog: MatDialog, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    var p = this.aroute.snapshot.params;
    this.id = p['id'];
    this.getProperty();
    this.getSellerUsername();
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
        this.sellerData = doc;
      });
    }});
  }

  deleteListing(paramid: string): void {
    this.fs.delete('properties', paramid);
  }

  updateListing(): void{
    const dialogR = this.dialog.open(UpdateComponent, {});
    dialogR.afterClosed().subscribe(result => {
      if (result) {
        this.fs.update('properties', this.id, result);} });
  }

  saveListing(paramid: string): void {
    const savedad: Savedad = {
      id: "",
      userid: this.authentication.currentUserId,
      adid: paramid
    };
    this.fs.addSaved("savedads", savedad);
  }

  hideListing(paramid: string): void {
    this.propertyHide = this.fs.getOne('properties', paramid).
    subscribe(result => {
      console.log(result);
      if (result) {
        result.hidden = "1";
        //this.fs.update('properties', paramid, result);
      }
      //if (result) {
      //result.hidden = "1";
      //this.fs.update('properties', paramid, result);}
    });
  }

  activateListing(paramid: string): void {
    /*this.propertyHide = this.fs.getOne('properties', paramid).pipe().subscribe(result => {
      if (result) {
      result.hidden = "0";
      this.fs.update('properties', paramid, result);}
    });*/
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
