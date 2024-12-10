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
    {
      user: 'Nguyen van a',
      message: 'Hello!',
      time: '10:00 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen thi b',
      message: 'Hi there!',
      time: '10:01 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen van v',
      message: 'How are you?',
      time: '10:02 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen van a',
      message: 'Hello!',
      time: '10:00 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen thi b',
      message: 'Hi there!',
      time: '10:01 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen van v',
      message: 'How are you?',
      time: '10:02 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen van a',
      message: 'Hello!',
      time: '10:00 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen thi b',
      message: 'Hi there!',
      time: '10:01 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
    {
      user: 'Nguyen van v',
      message: 'How are you?',
      time: '10:02 AM',
      avatar:
        'https://i.pinimg.com/564x/91/1b/88/911b881dd6f2e2e4a55838bf0072bdc1.jpg',
    },
  ];

  constructor(private router: Router) {}

  selectChat(chat: any) {
    this.router.navigate(['/message-box'], {
      queryParams: { user: chat.user },
    });
  }
}
