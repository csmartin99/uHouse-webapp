import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  property: Observable<Property> | null=null;
  id = "";
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };
  markeroptions: google.maps.MarkerOptions = {
    label: "cim"
  };
  address = "Tolarbag Mosque Road, Dhaka, Dhaka Division, Bangladesh";

  constructor(private fs: FbCrudService, private aroute: ActivatedRoute, private dialog: MatDialog) { }

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

}
