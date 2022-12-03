import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PROPERTY } from 'src/app/shared/database/property.database';
import { AddComponent } from '../add/add.component';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  properties = PROPERTY;
  //isAuthenticated: boolean | undefined;
  useremail: string | any;
  constructor(private dialog: MatDialog, private fs: FbCrudService, private router: Router, private authentication: AuthenticationService) {
    //console.log(this.authentication.userData)
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
    const dialogR = this.dialog.open(AddComponent, {});
    dialogR.afterClosed().subscribe(result => {
      if (this.useremail == null) {
        result.temp = "1";
      }
      if (result) {
        this.fs.add("properties", result);} });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.authentication.user.subscribe(userData => this.isAuthenticated = !!userData);
  }
}
