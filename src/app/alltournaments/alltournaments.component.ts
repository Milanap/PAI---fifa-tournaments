import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-alltournaments',
  templateUrl: './alltournaments.component.html',
  styleUrls: ['./alltournaments.component.css'],
  providers: [UserService]
})
export class AlltournamentsComponent {
	tournaments =[{Name: 'test'}];
  constructor(private userService: UserService,private router: Router ) { 
  this.getTournaments();}	
  getTournaments = () => {
	  this.userService.getAllTournaments().subscribe(
	  data => {
		  this.tournaments = data;
	  },
	  error => {
		  console.log(error);
	  } 
	  )
	  }
	  
	  getcurrentTorunament(event)
	  {
		  localStorage.setItem('currentTournament', event.target.id);
		  localStorage.setItem('currentTournamentName', event.target.name);
		  this.router.navigate(['/tournament'])
	  }
  ngOnInit() {
	  
  }

}
