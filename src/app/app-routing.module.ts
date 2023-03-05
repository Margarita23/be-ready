import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ScriptComponent } from './pages/script/script.component';

const routes: Routes = [{
  path: '',
  component: HomePageComponent
},
{
  path: 'about-us',
  component: AboutUsComponent
},
{
  path: 'journey',
  component: ScriptComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
