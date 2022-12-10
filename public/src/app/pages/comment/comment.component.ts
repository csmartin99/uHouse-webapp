import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    comment: new UntypedFormControl('')
  });

  constructor(public dialogRef: MatDialogRef<CommentComponent>) { }

  ngOnInit(): void {

  }
}
