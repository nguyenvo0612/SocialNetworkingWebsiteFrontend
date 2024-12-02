import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from './pages/user/create-profile/create-profile.component';
import { ChatListComponent } from './pages/user/chat-list/chat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    CreateProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
