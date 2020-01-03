import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataAPIService } from 'src/app/services/dataAPI.service';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from 'src/app/core/takeUntil-function/takeUntil-function';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  PLAYERSLIST;
  KEYSLIST = ['first_name','second_name'];
  name: string;
  username: string;
  email: string;
  password: string;
  constructor(
    private authService: AuthService,
    private dataService: DataAPIService
  ) { }

  ngOnInit() {
    this.getPlayers();
  }
  ngOnDestroy() {
	}
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }


    //Register user , subscribute to observable
    this.authService.registerUser(user).subscribe(data => {
      data => console.log(data)
    });

  }
  getPlayers() {
    this.dataService.getAllPlayers()
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(
        data => {
          this.PLAYERSLIST = data;
          console.log(data);
        }
      )
  }
  onSelect(item){
    console.log(item);
  }
}
