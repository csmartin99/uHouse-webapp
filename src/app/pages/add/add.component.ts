import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    price: new FormControl(0),
    picture:  new FormControl(''),
    address: new FormControl(''),
    area: new FormControl(''),
    rooms: new FormControl(''),
    premium: new FormControl(''),
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
