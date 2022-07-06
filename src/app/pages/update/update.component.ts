import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0),
    picture:  new FormControl(''),
    address: new FormControl(''),
    area: new FormControl(''),
    rooms: new FormControl(''),
    premium: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<UpdateComponent>) { }
  
  ngOnInit(): void {
  }

}
