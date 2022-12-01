import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    price: new UntypedFormControl(0),
    picture:  new UntypedFormControl(''),
    address: new UntypedFormControl(''),
    area: new UntypedFormControl(''),
    rooms: new UntypedFormControl(''),
    premium: new UntypedFormControl(''),
    googlemapssrc: new UntypedFormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<UpdateComponent>) { }
  
  ngOnInit(): void {
  }

}
