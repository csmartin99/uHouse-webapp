import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { Savedad } from 'src/app/shared/models/savedads.model';
import { PropertyComponent } from '../property/property.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  property: Observable<Property> | null=null;
  propertyHide: Observable<Property[]> | any;
  id = "";
  srcaddress = "";
  seller = "";

  constructor(private fs: FbCrudService, private aroute: ActivatedRoute, private dialog: MatDialog, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    var p = this.aroute.snapshot.params;
    this.id = p['id'];
    this.getProperty();
  }

  getProperty(): void {
    this.property = this.fs.getOne('properties', this.id);
    console.log(this.property);
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
