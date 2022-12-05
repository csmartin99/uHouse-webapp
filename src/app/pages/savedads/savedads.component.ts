import { Component, OnInit } from '@angular/core';
import { map, merge, Observable, of, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { Savedad } from 'src/app/shared/models/savedads.model';

@Component({
  selector: 'app-savedads',
  templateUrl: './savedads.component.html',
  styleUrls: ['./savedads.component.scss']
})
export class SavedadsComponent implements OnInit {
  property: Observable<Property> | any;
  properties: Observable<Property[]> | any;
  savedads: Observable<Savedad[]> | any;
  propList: Property[] = [];
  unsavedadid: string | any;
  unsavead: Savedad | any;
  counter: number | any;

  constructor(private fs: FbCrudService, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.getSavedAds();
    console.log("oninit");
  }

  getSavedAds(): void {
    this.fs.getSaved("savedads").pipe(map(ads => ads.filter(ad => ad.userid == this.authentication.currentUserId))).subscribe(result => {if (result) {
      result.forEach((doc) => {
        this.property = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.id == doc.adid))).subscribe(result => {if (result) {
          result.forEach((doc) => {
            if(!this.propList.includes(doc)) {
              this.propList.push(doc);
              this.properties = of(this.propList);
            }});
        }});
      });
    }});
  }

  unsaveListing(paramid: string): void {
    //this.counter = 0;
    console.log("unsave");
    this.fs.getSaved("savedads").pipe(map(ads => ads.filter(ad => ad.adid == paramid))).subscribe(result => {if (result) {
      result.forEach((doc) => {
        //this.unsavedadid = doc.id;
        this.fs.delete("savedads", doc.id);
      });
    }});
    this.property = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.id == null)));
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.id == null)));
    this.propList = [];
    this.getSavedAds();
    /*this.propList.forEach(element => {
      this.counter = this.counter+1;
      if (element.id == this.unsavedadid) {
        delete this.propList[this.counter];
      }
    });
    this.properties = of(this.propList);*/
  }
}
