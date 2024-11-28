import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css',
})
export class ChatListComponent {
  chats = [
    { user: 'User1', message: 'Hello!', time: '10:00 AM' },
    { user: 'User2', message: 'Hi there!', time: '10:01 AM' },
    { user: 'User1', message: 'How are you?', time: '10:02 AM' },
  ];
}
