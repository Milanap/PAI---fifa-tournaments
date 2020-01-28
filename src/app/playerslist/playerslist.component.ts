import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-playerslist',
  templateUrl: './playerslist.component.html',
  styleUrls: ['./playerslist.component.css'],
    providers: [UserService]
})
export class PlayerslistComponent implements OnInit {

tournaments;
tournament = localStorage.getItem('currentTournament');
players=[];
dane;  
isSigned=true;
  constructor(private userService: UserService ) { 
  this.getTournaments();}	
  getTournaments = () => {
	  this.userService.getCurrentTournaments(this.tournament).subscribe(
	  data => {
		  this.tournaments = data;
		  console.log(this.tournament);
		  console.log(this.tournaments);
			for (var i = 0; i < this.tournaments.maxPlayer; i++) {
			  this.players.push(this.tournaments.playerrount[i]);
			  console.log(this.players);
			  if(localStorage.getItem('user')==this.tournaments.playerrount[i])
				  this.isSigned=false;
			}
			if(this.tournaments.playerrount.length==16)
				  this.isSigned=false;
	  },
	  error => {
		  console.log(error);
	  } 
	  )
	  }
	    ngOnInit() {
	  this.dane = {
		  name: 'Test',
		  maxPlayer: 16,
		  playerrount: [localStorage.getItem('user')]
	  };	
	  console.log(this.dane);	  
		}
	  addUser() {
	  this.userService.AddUserToTournament(this.tournament,this.dane).subscribe(	 
	  response =>{
		  console.log(response);
		   setTimeout(function() {
    location.reload(); 
}, 500);
	  },
	  error =>console.log(error)
	  );
	 
  }	  

}
