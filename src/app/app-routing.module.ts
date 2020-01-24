import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ToornamentComponent } from './toornament/toornament.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'home',
  component: ToornamentComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }