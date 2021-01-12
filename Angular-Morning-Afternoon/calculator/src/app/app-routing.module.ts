import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ApiComponent } from './api/api.component';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: 'api', component:  ApiComponent},
  { path: 'adduser', component: AdduserComponent },
  { path: '', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
