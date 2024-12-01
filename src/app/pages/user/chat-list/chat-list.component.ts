import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css',
})
export class ChatListComponent {
  chats = [
    { user: 'Nguyen van a', message: 'Hello!', time: '10:00 AM' },
    { user: 'Nguyen thi b', message: 'Hi there!', time: '10:01 AM' },
    { user: 'Nguyen van v', message: 'How are you?', time: '10:02 AM' },
  ];

  constructor(private router: Router) {}

  selectChat(chat: any) {
    this.router.navigate(['/message-box'], {
      queryParams: { user: chat.user },
    });
  }
}
