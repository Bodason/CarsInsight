import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Version1',  component: HomePageComponent},
  { path: 'Version2',  component: HomePageComponent},
  { path: '**', redirectTo: '/Version1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
