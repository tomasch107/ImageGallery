import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  onLogin() {
    this.authService
      .loginEmail(this.loginForm.value)
      .then((res) => {
        console.log('You are Successfully logged in!');
        this.router.navigate(['/admin']);
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
  }
}
