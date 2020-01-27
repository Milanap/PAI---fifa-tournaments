import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.css'],
  providers: [UserService]
})
export class BracketComponent implements OnInit {

tournaments;
tournament = localStorage.getItem('currentTournament');
  constructor(private userService: UserService ) { 
  this.getTournaments();}	
  getTournaments = () => {
	  this.userService.getCurrentTournaments(this.tournament).subscribe(
	  data => {
		  this.tournaments = data;
		if(this.tournaments.quarterfinal.length==0)
		  this.tournaments.quarterfinal[0]='';
	  if(this.tournaments.semifinal.length==0)
		  this.tournaments.semifinal[0]='';
	  if(this.tournaments.final.length==0)
		  this.tournaments.final[0]='';
	  if(this.tournaments.winner.length==0)
		  this.tournaments.winner[0]='';		  
	  }, 
	  error => {
		  console.log(error);
	  } 
	  )
	  }
	    ngOnInit() {
	  	  
		} 

}

