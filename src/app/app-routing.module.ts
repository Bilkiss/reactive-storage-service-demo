import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { TotalComponent } from './components/total/total.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "list", component: ListComponent },
  { path: "total", component: TotalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
