import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-tournamentmanagement',
  templateUrl: './tournamentmanagement.component.html',
  styleUrls: ['./tournamentmanagement.component.css'],
  providers: [UserService]
})
export class TournamentmanagementComponent implements OnInit {
  title='Dodaj Wynik';
  score;
  ManagementForm: FormGroup; 
  tournaments;
  isStarted=true;
  caseNumber=0;
  dane;
  dane1;
  dane2;
tournament = localStorage.getItem('currentTournament');
constructor(private formBuilder: FormBuilder, private userService: UserService ) { 
	this.getTournaments();}
	getTournaments = () => {
	  this.userService.getCurrentTournaments(this.tournament).subscribe(
	  data => {
		  this.tournaments = data;
		  if(this.tournaments.playerrount.length==16)
			  this.isStarted=true;
		  if(this.tournaments.playerrountgoal.length==0&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=0;
		  if(this.tournaments.playerrountgoal.length==2&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=1;
		  if(this.tournaments.playerrountgoal.length==4&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=2;
		  if(this.tournaments.playerrountgoal.length==6&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=3;
		  if(this.tournaments.playerrountgoal.length==8&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=4;
		  if(this.tournaments.playerrountgoal.length==10&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=5;
		  if(this.tournaments.playerrountgoal.length==12&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=6;
		  if(this.tournaments.playerrountgoal.length==14&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=7;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==0&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=8;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==2&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=9;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==4&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=10;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==6&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=11;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==8&&this.tournaments.semifinalgoal.length==0&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=12;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==8&&this.tournaments.semifinalgoal.length==2&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=13;
		  if(this.tournaments.playerrountgoal.length==16&&this.tournaments.quarterfinalgoal.length==8&&this.tournaments.semifinalgoal.length==4&&this.tournaments.finalgoal.length==0)
			  this.caseNumber=14;		  
		   },
	  error => {
		  console.log(error);
	  } 
	  )
	  }
  ngOnInit() {
	  this.score = {
		  first: '',
		  second: ''
	  };		  
	 this.ManagementForm = this.formBuilder.group({
      'firstscore': [this.score.first, [
        Validators.required,
		Validators.minLength(1),
        Validators.maxLength(2)
      ]],
      'secondscore': [this.score.second, [
        Validators.required,
		Validators.minLength(1),
        Validators.maxLength(2)
      ]]
    });
  }
  
  addGoalsSixteen(x) {	
	  this.userService.AddGoalsToSixteen(this.tournament,x).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
  }
  addGoalsQF(x) {
	  this.userService.AddGoalsToQF(this.tournament,x).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
   addGoalsSF(x) {
	  this.userService.AddGoalsToSF(this.tournament,x).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
   addGoalsF(x) {
	  this.userService.AddGoalsToF(this.tournament,x).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
	addUserQF() {
	  this.userService.AddUserToQF(this.tournament,this.dane).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
	addUserSF() {
	  this.userService.AddUserToSF(this.tournament,this.dane).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
	addUserF() {
	  this.userService.AddUserToF(this.tournament,this.dane).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
	addUserW() {
	  this.userService.AddUserToW(this.tournament,this.dane).subscribe(	 
	  response =>{
		  console.log(response);
	  },
	  error =>console.log(error)
	  );
	  }
	  
	  
  addScore() {
	  if(this.score.first!=this.score.second)
	  {
	  switch (this.caseNumber) {
    case 0:
	this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);	
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 8,
		  quarterfinal: [this.tournaments.playerrount[0]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 8,
		  quarterfinal: [this.tournaments.playerrount[1]]
	  };
	  this.addUserQF();
	  }	
setTimeout(function() {
    location.reload(); 
}, 500);	  
        break;
    case 1:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);	
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[2]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[3]]
	  };
	  this.addUserQF();
	  }	  
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 2:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[4]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[5]]
	  };
	  this.addUserQF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 3:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[6]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[7]]
	  };
	  this.addUserQF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 4:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[8]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[9]]
	  };
	  this.addUserQF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 5:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[10]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[11]]
	  };
	  this.addUserQF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 6:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[12]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[13]]
	  };
	  this.addUserQF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
	case 7:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.first]
	  };
	this.addGoalsSixteen(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlay: 16,
		  playerrountgoal: [this.score.second]
	  };
	  this.addGoalsSixteen(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[14]]
	  };
	  this.addUserQF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerQf: 16,
		  quarterfinal: [this.tournaments.playerrount[15]]
	  };
	  this.addUserQF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 8:
        this.dane1 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.first]
	  };
	this.addGoalsQF(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.second]
	  };
	  this.addGoalsQF(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[0]]
	  };
	  this.addUserSF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[1]]
	  };
	  this.addUserSF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 9:
         this.dane1 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.first]
	  };
	this.addGoalsQF(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.second]
	  };
	  this.addGoalsQF(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[2]]
	  };
	  this.addUserSF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[3]]
	  };
	  this.addUserSF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000); 
        break;
    case 10:
         this.dane1 = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  quarterfinalgoal: [this.score.first]
	  };
	this.addGoalsQF(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.second]
	  };
	  this.addGoalsQF(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[4]]
	  };
	  this.addUserSF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[5]]
	  };
	  this.addUserSF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 11:
         this.dane1 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.first]
	  };
	this.addGoalsQF(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlayQF: 8,
		  quarterfinalgoal: [this.score.second]
	  };
	  this.addGoalsQF(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[6]]
	  };
	  this.addUserSF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerSF: 4,
		  semifinal: [this.tournaments.quarterfinal[7]]
	  };
	  this.addUserSF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 12:
         this.dane1 = {
		  name: 'Test',
		  maxGoalPlaySF: 4,
		  semifinalgoal: [this.score.first]
	  };
	this.addGoalsSF(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlaySF: 4,
		  semifinalgoal: [this.score.second]
	  };
	  this.addGoalsSF(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerF: 2,
		  final: [this.tournaments.semifinal[0]]
	  };
	  this.addUserF();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerF: 2,
		  final: [this.tournaments.semifinal[1]]
	  };
	  this.addUserF();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    case 13:
         this.dane1 = {
		  name: 'Test',
		  maxGoalPlayF: 4,
		  finalgoal: [this.score.first]
	  };
	this.addGoalsF(this.dane1);
	this.dane2 = {
		  name: 'Test',
		  maxGoalPlayF: 4,
		  finalgoal: [this.score.second]
	  };
	  this.addGoalsF(this.dane2);
	  if(this.score.first>this.score.second)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerW: 1,
		  winner: [this.tournaments.final[0]]
	  };
	  this.addUserW();
	  } else if (this.score.second>this.score.first)
	  {
		  this.dane = {
		  name: 'Test',
		  maxPlayerW: 1,
		  winner: [this.tournaments.final[1]]
	  };
	  this.addUserW();
	  }
	  setTimeout(function() {
    location.reload(); 
}, 1000);
        break;
    default:
        console.log("blad!");
        break;
}
	  } else 
	  console.log('wynik nie moze byc remisowy');
  }
  
}

