import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    pw: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.signOut();
  }

  login(): void {
    if (this.form.valid) {
      this.authentication.signIn(this.form.value.email, this.form.value.pw).then(result => {console.log(result); this.router.navigateByUrl("/home/property")});
    }
  }
}
