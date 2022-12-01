import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    name: new UntypedFormControl('', Validators.required),
    price: new UntypedFormControl(0),
    picture:  new UntypedFormControl(''),
    address: new UntypedFormControl(''),
    area: new UntypedFormControl(''),
    rooms: new UntypedFormControl(''),
    premium: new UntypedFormControl(''),
    googlemapssrc: new UntypedFormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
  }

  /*close(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.dialogRef.close();
    }
  }*/

}
