import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})

export class MyprofileComponent implements OnInit {
  auth: boolean | any;
  id: string | any;
  email: string | any;
  uname: string | any;
  properties: Observable<Property[]> | any;
  user: Observable<User> | null=null;
  userTemp: User | any;
  liked: boolean | any;
  disliked: boolean | any;
  reported: boolean | any;

  constructor(private fs: FbCrudService, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.auth = this.authentication.isAuthenticated;
    this.email = this.authentication.userData;
    if(this.auth && this.email) {
      this.getUser();
    }
  }

  getUser(): void {
    this.user = this.fs.getOneUserEmail("users", this.email);
  }

  getUsersProperties(): void {
    this.properties = this.fs.getProperyOfUser('properties', this.email);
  }
}