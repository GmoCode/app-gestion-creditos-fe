import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [

  { path: 'page', loadChildren:() => import('./page/page.module').then(m => m.PageModule)},

  { path: "login", component: LoginComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },

  { path: "**", component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
