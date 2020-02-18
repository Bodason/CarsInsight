import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'A',  component: HomePageComponent},
  { path: 'B',  component: HomePageComponent},
  { path: 'C',  component: HomePageComponent},
  { path: '**', redirectTo: '/A' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
