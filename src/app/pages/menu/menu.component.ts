import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private dialog: MatDialog, private fs: FbCrudService, private router: Router, private authentication: AuthenticationService) { }

  logout(): void {
    this.router.navigateByUrl('home');
    this.authentication.signOut();
  }

  showDialog(): void{
    const dialogR = this.dialog.open(AddComponent, {});
    dialogR.afterClosed().subscribe(result => {
      if (result) {
        this.fs.add("properties", result);} });
  }
}
