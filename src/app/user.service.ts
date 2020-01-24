import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'
@Injectable()
export class UserService {
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
	loggedIn()
	{
		return !!localStorage.getItem('token');
	}
	getToken () {
		return localStorage.getItem('token');
	}
	logoutUser() {
		localStorage.removeItem('token');
		this._router.navigate(['/']);
	}
}
