import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ToornamentComponent } from './toornament/toornament.component';
import { TournamentbarComponent } from './tournamentbar/tournamentbar.component';
import { NewtournamentComponent } from './newtournament/newtournament.component';
import { MytournamentsComponent } from './mytournaments/mytournaments.component';
import { AlltournamentsComponent } from './alltournaments/alltournaments.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { TokenIcneptorService } from './token-icneptor.service';
import { TorunamentviewComponent } from './torunamentview/torunamentview.component';
import { TournamentviewbarComponent } from './tournamentviewbar/tournamentviewbar.component';
import { PlayerslistComponent } from './playerslist/playerslist.component';
import { BracketComponent } from './bracket/bracket.component';
import { TournamentmanagementComponent } from './tournamentmanagement/tournamentmanagement.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MainComponent,
    ToornamentComponent,
    TournamentbarComponent,
    NewtournamentComponent,
    MytournamentsComponent,
    AlltournamentsComponent,
    TorunamentviewComponent,
    TournamentviewbarComponent,
    PlayerslistComponent,
    BracketComponent,
    TournamentmanagementComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	MaterialModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	AppRoutingModule
  ],
  providers: [AuthGuard, UserService,
  {
	  provide: HTTP_INTERCEPTORS,
	  useClass: TokenIcneptorService,
	  multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

