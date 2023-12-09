// layout-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { FormComponent } from '../../pages/form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: '**', component: FormComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
