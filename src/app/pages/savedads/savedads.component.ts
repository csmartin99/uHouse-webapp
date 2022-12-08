import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, mergeMap, Observable, of, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { Savedad } from 'src/app/shared/models/savedads.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-savedads',
  templateUrl: './savedads.component.html',
  styleUrls: ['./savedads.component.scss']
})
export class SavedadsComponent implements OnInit {
  columnNames = ["name","address","price","area","rooms","created","view","saved"];
  dataSource = new MatTableDataSource<Property>();
  property: Observable<Property> | any;
  properties: Observable<Property[]> | any;
  savedads: Observable<Savedad[]> | any;
  savedadsObj: Savedad[] | any;
  propList: Property[] = [];
  unsavedadid: string | any;
  unsavead: Savedad | any;
  counter: number | any;
  auth: boolean | any;
  email = "";
  userid = "";
  userTemp: User | any; 

  constructor(private fs: FbCrudService, private authentication: AuthenticationService) {
    this.auth = this.authentication.isAuthenticated;
    if (this.auth) {
      this.email = this.authentication.userData;
      this.userid = this.authentication.currentUserId;

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
  }
  ngOnInit(): void {
    this.getSavedAds();
  }

  getUser(): void {
    this.propList = [];
    this.userTemp[0].savedads.forEach((adid: string) => {
      this.property = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.id == adid))).subscribe(result => {if (result) {
        result.forEach((doc) => {
          if(!this.propList.includes(doc)) {
            this.propList.push(doc);
            this.properties = of(this.propList);
          }
        });
      }});
    });
  }

  getSavedAds(): void {
    //this.savedads = this.fs.getSaved("savedads", this.userid).pipe(mergeMap(result => this.fs.getPropertyById("properties", result)));

    /*this.propList = [];
    this.savedads = this.fs.getSaved("savedads", this.userid).subscribe(result => {if (result) {
      result.forEach((doc) => {
        this.property = this.fs.getPropertyById("properties",doc.adid).subscribe(result => {if (result) {
          result.forEach((doc) => {
            if(!this.propList.includes(doc)) {
              this.propList.push(doc);
              this.properties = of(this.propList);
            }
          })}})
        });
    }});*/


    //console.log(this.savedads);

    //console.log(this.userid);
    /*this.fs.getSaved("savedads", this.userid).pipe(
      map(results => map(results.doc))
    );*/

    //console.log(this.savedadsObj);
    /*this.fs.getSaved("savedads").pipe(map(ads => ads.filter(ad => ad.userid == this.authentication.currentUserId))).subscribe(result => {if (result) {
      result.forEach((doc) => {
        this.property = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.id == doc.adid))).subscribe(result => {if (result) {
          result.forEach((doc) => {
            if(!this.propList.includes(doc)) {
              this.propList.push(doc);
              this.properties = of(this.propList);
            }});
        }});
      });
    }});*/
  }

  unsaveListing(paramid: string): void {
    let array: string[] = [];
    this.userTemp[0].savedads.forEach((element: string) => {
      if(element != paramid) {
        array.push(element);
      }
    });
    this.fs.updateSaved("users", this.userTemp[0].id, array);
    this.getUser();
    /*this.fs.getSaved("savedads").pipe(map(ads => ads.filter(ad => ad.adid == paramid))).subscribe(result => {if (result) {
      result.forEach((doc) => {
        //this.unsavedadid = doc.id;
        this.fs.delete("savedads", doc.id);
      });
    }});
    this.properties = this.fs.get("properties").pipe(map(props => props.filter(prop => prop.id == null)));
    this.propList = [];*/
    //this.getSavedAds();
    /*this.propList.forEach(element => {
      this.counter = this.counter+1;
      if (element.id == this.unsavedadid) {
        delete this.propList[this.counter];
      }
    });
    this.properties = of(this.propList);*/
  }
}
