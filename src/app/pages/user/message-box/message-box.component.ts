import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class MessageBoxComponent implements OnInit {
  user: string = '';
  newMessage: string = '';
  messages: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.user = params['user'];
      this.loadFakeMessages();
    });
  }

  loadFakeMessages() {
    this.messages = [
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 1,
        content: 'Hello!',
        sent_at: '10:00 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 2,
        content: 'Hi there!',
        sent_at: '10:01 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 1,
        content: 'How are you?',
        sent_at: '10:02 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 2,
        content: 'I am good, thanks! And you?',
        sent_at: '10:03 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 1,
        content: 'Just working on some projects.',
        sent_at: '10:04 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 2,
        content: 'Sounds great! Let’s catch up soon.',
        sent_at: '10:05 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 1,
        content: 'How are you?',
        sent_at: '10:02 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 2,
        content: 'I am good, thanks! And you?',
        sent_at: '10:03 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 1,
        content: 'Just working on some projects.',
        sent_at: '10:04 AM',
      },
      {
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 2,
        content: 'Sounds great! Let’s catch up soon.',
        sent_at: '10:05 AM',
      },
    ];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        conversations_id: 1,
        user1_id: 1,
        user2_id: 2,
        sender_id: 1,
        content: this.newMessage,
        sent_at: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
      this.newMessage = '';
    }
  }
}
