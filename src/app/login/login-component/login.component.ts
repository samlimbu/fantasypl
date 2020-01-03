import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    console.log(user);
    this.authService.authenticateUser(user)
    .subscribe(data=>{
      console.log(data);
      if(data['success']){
        console.log(data);
          this.authService.storeUserData(data['token'], data['user']);
         this.router.navigate(['home']);
          
      }
      else{

           this.router.navigate(['login']);
      }

    });
}


}

