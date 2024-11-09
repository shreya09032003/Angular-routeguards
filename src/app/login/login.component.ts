import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login(userid: any, password: any) {
    if (userid == 'admin' && password == 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      alert('Login successful.');
    } else {
      sessionStorage.setItem('isLoggedIn', 'false');
      alert('Incorrect credentials. Please try again.');

    }
  }
}
