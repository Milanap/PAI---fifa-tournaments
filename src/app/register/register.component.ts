import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
providers: [UserService]
})
export class RegisterComponent implements OnInit {
  title;
  register;
  registerForm: FormGroup; 
constructor(private formBuilder: FormBuilder, private userService: UserService ) { }
  ngOnInit() {
	  this.register = {
		  username: '',
		  email: '',
		  password: ''
	  };
	  
	  this.registerForm = this.formBuilder.group({
      'name': [this.register.username, [
        Validators.required
      ]],
      'email': [this.register.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.register.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18)
      ]]
    });
  }
  registerUser() {
	  this.userService.registerNewUser(this.register).subscribe(
	  response =>{
		  this.title='Użytkownik'+' '+this.register.username + ' został utworzony!';
	  },
	  error => this.title='Nazwa użytkownika jest zajęta!'
	  );
  }
}
