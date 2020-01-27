import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-tournamentviewbar',
  templateUrl: './tournamentviewbar.component.html',
  styleUrls: ['./tournamentviewbar.component.css'],
  providers: [UserService]
})
export class TournamentviewbarComponent implements OnInit {
tournaments;
tournament = localStorage.getItem('currentTournament');
isOwner=false;
  constructor(private userService: UserService ) { 
  this.getTournaments();}	
  getTournaments = () => {
	  this.userService.getCurrentTournaments(this.tournament).subscribe(
	  data => {
		  this.tournaments = data;
		  if(localStorage.getItem('user')==this.tournaments.nameplay)
				  this.isOwner=true;			
	  },
	  error => {
		  console.log(error);
	  } 
	  )
	  }
	  
  ngOnInit() {
	  
  }

}
