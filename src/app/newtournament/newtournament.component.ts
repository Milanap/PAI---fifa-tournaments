import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import {Router} from "@angular/router"
@Component({
  selector: 'app-newtournament',
  templateUrl: './newtournament.component.html',
  styleUrls: ['./newtournament.component.css'],
providers: [UserService]
})
export class NewtournamentComponent implements OnInit {
  title;
  tournament;
  tournamentForm: FormGroup; 
constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router ) { }
  ngOnInit() {
	  this.tournament = {
		  name: '',
		  nameplay: localStorage.getItem('user'),
	  };
	  console.log(localStorage.getItem('user'));
	 this.tournamentForm = this.formBuilder.group({
      'name': [this.tournament.username, [
        Validators.required
      ]]
    });
  }
  addTournament() {
	  console.log(this.tournament)
	  this.userService.addNewTournament(this.tournament).subscribe(
	  response =>{
		  this.title='Turniej'+' '+this.tournament.name + ' został dodany!';
		  setTimeout(function() {
    location.reload(); 
}, 500);
	  },
	  error =>this.title='Bład!'
	  );
	  
  }
}