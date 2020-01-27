import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
@Injectable()
export class UserService {
	httpHeaders = new HttpHeaders({'Content-type': 'application/json'})
	httpHeaderss = new HttpHeaders({'Content-type': 'application/json2'})
	constructor (private http: HttpClient, private _router: Router) { }
	registerNewUser(userData): Observable<any> {
		return this.http.post('http://127.0.0.1:8000/turniej/register/', userData);
	}
	
	loginNewUser(userData): Observable<any> {
		return this.http.post('http://127.0.0.1:8000/turniej/auth/', userData);
	}
	
	addNewTournament(tournamentData): Observable<any> {
		return this.http.post('http://127.0.0.1:8000/turniej/tournament/', tournamentData);
	}
	getAllTournaments(): Observable<any> {
		return this.http.get('http://127.0.0.1:8000/turniej/tournament/',
		{headers:this.httpHeaders});
	}
	getCurrentTournaments(tournamentData): Observable<any> {
		return this.http.get('http://127.0.0.1:8000/turniej/tournament/'+tournamentData+'/',
		{headers:this.httpHeaderss});
	}
	AddUserToTournament(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentadd/'+ct+'/', tournamentData);
	}
	
	AddUserToQF(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentaddQF/'+ct+'/', tournamentData);
	}
	
	AddUserToSF(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentaddSF/'+ct+'/', tournamentData);
	}
	
	AddUserToF(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentaddF/'+ct+'/', tournamentData);
	}
	
	AddUserToW(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentaddWinn/'+ct+'/', tournamentData);
	}
	
	AddGoalsToSixteen(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentaGoalFull/'+ct+'/', tournamentData);
	}
	
	AddGoalsToQF(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentGoalQF/'+ct+'/', tournamentData);
	}
	
	AddGoalsToSF(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentGoalSF/'+ct+'/', tournamentData);
	}
	
	AddGoalsToF(ct,tournamentData): Observable<any> {
		return this.http.put('http://127.0.0.1:8000/turniej/tournamentGoalF/'+ct+'/', tournamentData);
	}
		
	loggedIn()
	{
		return !!localStorage.getItem('token');
	}
	getToken () {
		return localStorage.getItem('token');
	}
	logoutUser() {
		localStorage.removeItem('token');
		localStorage.removeItem('User');
		this._router.navigate(['/']);
	}
}
