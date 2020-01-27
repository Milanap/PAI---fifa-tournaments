import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router"
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
constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router ) { }
  ngOnInit() {
	  this.login = {
		  username: '',
		  password: ''
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
	  localStorage.setItem('user', this.login.username);
	  this.userService.loginNewUser(this.login).subscribe(	 
	  response =>{
		  console.log(response);
		  this.title='Użytkownik'+' '+this.login.username + ' został zalogowany!';
		  localStorage.setItem('token', response.token);
		  this.router.navigate(['/home'])
	  },
	  error =>this.title='Błędne dane!'
	  );
  }
  
}
