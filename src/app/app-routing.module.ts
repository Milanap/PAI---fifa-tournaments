import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ToornamentComponent } from './toornament/toornament.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'home',
  component: ToornamentComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }