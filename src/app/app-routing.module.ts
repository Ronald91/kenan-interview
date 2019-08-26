import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunWithFormsComponent } from './fun-with-forms/fun-with-forms.component';
import { LazyComponent } from './lazy/lazy.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FunWithFormsComponent
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./lazy/lazy.module').then(mod => mod.LazyModule)
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
