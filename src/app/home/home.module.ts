import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user/user.service';

@NgModule({
  imports: [CommonModule, FormsModule, HomeComponent],
})
export class HomeModule {}
