import { Component} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FbCrudService } from 'src/app/services/fb-crud.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  form: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    email: new UntypedFormControl('', [Validators.required]),
    pw: new UntypedFormControl('', [Validators.required])
  });
  
  constructor(private router: Router, private authentication: AuthenticationService, private fs: FbCrudService) { }

  signup(): void {
    if (this.form.valid) {
      this.authentication.signUp(this.form.value.email, this.form.value.pw).then(result => {this.router.navigateByUrl("/log")});
      const user: User = {
        id: "",
        userid: "",
        useremail: this.form.value.email,
        username: this.form.value.username,
        like: 0,
        dislike: 0,
        report: 0
      };
      this.fs.addUser("users", user);
    }
  }
}
