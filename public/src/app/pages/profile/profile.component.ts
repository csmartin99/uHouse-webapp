import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { tap, Observable, of, map } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { Property } from 'src/app/shared/models/property.model';
import { User } from 'src/app/shared/models/user.model';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  auth: boolean | any;
  id: string | any;
  email: string | any;
  uname: string | any;
  properties: Observable<Property[]> | any;
  user: Observable<User> | null=null;
  userTemp: User | any;
  liked: boolean | any;
  disliked: boolean | any;
  reported: boolean | any;

  constructor(private fs: FbCrudService, private authentication: AuthenticationService, private aroute: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    var uroute = this.aroute.snapshot.params;
    this.uname = uroute['username'];
    this.auth = this.authentication.isAuthenticated;
    this.email = this.authentication.userData;
    this.getUser();
  }

  getUser(): void {
    this.user = this.fs.getOneUser("users", this.uname);

    this.fs.getUserByName("users", this.uname).pipe(map(users => {
      return users.map(u => {
        const usr: User = {
          id: u.id,
          userid: u.userid,
          useremail: u.useremail,
          username: u.username,
          like: u.like,
          dislike: u.dislike,
          report: u.report,
          comments: u.comments,
          savedads: u.savedads
        }
        return usr
      })
    }))
    .subscribe(data=>this.userTemp=data);
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
    if (this.reported == true) {
      this.fs.updateReport("users", param, report-1)
      this.reported = false;
    } else {
      this.fs.updateReport("users", param, report+1)
      this.reported = true;
    }
  }

  addComment(id: string): void {
    let array: string[] = [];

    this.userTemp[0].comments.forEach((element: string) => {
      array.push(element);
    });

    const dialogR = this.dialog.open(CommentComponent, {});
    dialogR.afterClosed().subscribe(result => {
      if (result) {
        array.push(result.comment);
        this.fs.updateComment("users", id, array);
      }});
  }
}
