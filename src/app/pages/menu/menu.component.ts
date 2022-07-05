import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.model';
import { MatDialog } from '@angular/material/dialog';
import { PROPERTY } from 'src/app/shared/database/property.database';
import { AddComponent } from '../add/add.component';
import { FbCrudService } from 'src/app/services/fb-crud.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuoptions: Menu[] = [];
  properties = PROPERTY;
  constructor(private dialog: MatDialog, private service: FbCrudService) { }

  ngOnInit(): void {
  }

  showDialog(): void{
    const dialogR = this.dialog.open(AddComponent, {});
    dialogR.afterClosed().subscribe(result => {
      if (result) {
        this.service.add("properties", result);} });
  }
}
