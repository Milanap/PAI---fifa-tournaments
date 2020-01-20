import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
providers: [UserService]
})
export class LoginComponent implements OnInit {
  title;
  login;
  loginForm: FormGroup; 
constructor(private formBuilder: FormBuilder, private userService: UserService ) { }
  ngOnInit() {
	  this.login = {
		  username: 'user2',
		  password: 'qwerty'
	  };
	  
	 this.loginForm = this.formBuilder.group({
      'username': [this.login.username, [
        Validators.required
      ]],
      'password': [this.login.password, [
        Validators.required
      ]]
    });
  }
  loginUser() {
	  this.userService.loginNewUser(this.login).subscribe(
	  response =>{
		  this.title='Użytkownik'+' '+this.login.username + ' został zalogowany!';
	  },
	  //error =>this.title='Błędne dane!'
	  error =>console.log('error', error,this.login.username)
	  );
  }
}
