import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/user/home/home.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateProfileComponent } from './pages/user/create-profile/create-profile.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { CreatePostComponent } from './pages/user/create-post/create-post.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'user',
    component: UserComponent,
  },

  {
    path: 'create_profile',
    component: CreateProfileComponent,
  },

  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'new_post',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
