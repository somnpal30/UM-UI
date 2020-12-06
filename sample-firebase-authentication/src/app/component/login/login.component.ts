import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: { name: string, message: string } = {name: '', message: ''}; // for firbase error handle

  constructor(private authService: AuthenticationService, private router: Router) {
  }


  ngOnInit(): void {
  }

  login = () => {
    this.authService.loginWithEmail(this.email, this.password).then(
      () => {
        this.router.navigate(['/secure/myuser']);
      }).catch(_error => {
      this.error = _error
      this.router.navigate(['/login'])
    });
  }
}
