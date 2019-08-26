import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunWithFormsComponent } from './fun-with-forms/fun-with-forms.component';


const routes: Routes = [
  {
path: 'forms',
component: FunWithFormsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],

})
export class AppRoutingModule { }
