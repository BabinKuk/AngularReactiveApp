import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    console.log('login ' + email + ', ' + password);
    this.userService.login(email, password)
      .subscribe(
        () => {
          console.log('Login success');
          // redirect to home page
          this.router.navigateByUrl('/home');
        },
        console.error
      );
  }

}
