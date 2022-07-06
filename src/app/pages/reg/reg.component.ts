import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pw: new FormControl('', [Validators.required])
  });
  
  constructor(private router: Router, private authentication: AuthenticationService) { }

  signup(): void {
    if (this.form.valid) {
      this.authentication.signUp(this.form.value.email, this.form.value.pw).then(result => {this.router.navigateByUrl("/log")});
    }
  }
}
