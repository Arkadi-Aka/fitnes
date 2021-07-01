import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserComponent} from "./user/user.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";
import { MyProfileComponent } from "./home/my-profile/my-profile.component";
import { DashboardComponent } from "./home/dashboard/dashboard.component";
import { ProgramsComponent } from "./home/programs/programs.component";
import { FoodComponent } from "./home/food/food.component";

const routes: Routes = [

  {path: 'signup', component: UserComponent,
  children:[{path: '', component: SignUpComponent}]
  },

  {path: 'login', component: UserComponent,
    children:[{path: '', component: SignInComponent}]
  },

  {path: '', component: HomeComponent,
    children:[
      {path: '', component: MyProfileComponent},
      {path: 'profile', component: MyProfileComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'programs', component: ProgramsComponent},
      {path: 'food', component: FoodComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
