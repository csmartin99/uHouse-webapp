import { Component} from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent {
  form: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required]),
    pw: new UntypedFormControl('', [Validators.required])
  });
  
  constructor(private router: Router, private authentication: AuthenticationService) { }

  signup(): void {
    if (this.form.valid) {
      this.authentication.signUp(this.form.value.email, this.form.value.pw).then(result => {this.router.navigateByUrl("/log")});
    }
  }
}
