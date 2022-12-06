import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    comment: new UntypedFormControl('')
  });
  auth: boolean | any;
  user: Observable<User> | null=null;
  id: string | any;
  email: string | any;
  uname: string | any;
  properties: Observable<Property[]> | any;
  users: Observable<User[]> | any;
  liked: boolean | any;
  disliked: boolean | any;
  reported: boolean | any;
  comments: string[] | any;

  constructor(private fs: FbCrudService, private authentication: AuthenticationService, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    var uroute = this.aroute.snapshot.params;
    this.uname = uroute['username'];
    this.auth = this.authentication.isAuthenticated;
    this.getUser();
  }

  getUser(): void {
    this.users = this.fs.getOneUser("users", this.uname);
  }

  getUsersProperties(email: string): void {
    this.properties = this.fs.getProperyOfUser('properties', email);
  }

  addLike(param: string, like: number): void {
    if (this.liked == true) {
      this.fs.updateLike("users", param, like-1);
      this.liked = false;
    } else {
      this.fs.updateLike("users", param, like+1);
      this.liked = true;
    }
  }

  addDislike(param: string, dislike: number): void {
    if (this.disliked == true) {
      this.fs.updateDislike("users", param, dislike-1);
      this.disliked = false;
    } else {
      this.fs.updateDislike("users", param, dislike+1);
      this.disliked = true;
    }
  }

  addReport(param: string, report: number): void {
    if (this.disliked == true) {
      this.fs.updateReport("users", param, report-1)
      this.disliked = false;
    } else {
      this.fs.updateReport("users", param, report+1)
      this.disliked = true;
    }
  }

  addComment(param: string): void {
    //TODO
    /*this.user = this.fs.getOne("users", param).subscribe((value: any[]) => {
      let jobs: any[] = value;
      console.log(jobs);
      console.log(jobs.length);
    });*/
    console.log(this.user);
    console.log(this.form.value.comment);
    this.comments = [];
    this.comments.push(this.form.value.comment);
    //console.log(this.comments);
    //this.comments.push("ez is");
    this.fs.updateComment("users", "AKubQGhhsGuuBJnOBvDx", this.comments);
  }

}
