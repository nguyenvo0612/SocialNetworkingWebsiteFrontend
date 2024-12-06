import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/user/home/home.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateProfileComponent } from './pages/user/create-profile/create-profile.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { CreatePostComponent } from './pages/user/create-post/create-post.component';
import { ChatListComponent } from './pages/user/chat-list/chat-list.component';
import { MessageBoxComponent } from './pages/user/message-box/message-box.component';
import { PostReviewComponent } from './pages/user/post-review/post-review.component';

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
    component: AccountComponent,
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
  {
    path: 'post-review',
    component: PostReviewComponent,
  },
  {
    path: 'chat-list',
    component: ChatListComponent,
  },
  {
    path: 'message-box',
    component: MessageBoxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
