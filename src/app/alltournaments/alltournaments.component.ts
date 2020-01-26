import { Component} from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-alltournaments',
  templateUrl: './alltournaments.component.html',
  styleUrls: ['./alltournaments.component.css'],
  providers: [UserService]
})
export class AlltournamentsComponent {
	tournaments =[{Name: 'test'}];
  constructor(private userService: UserService) { 
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


}
