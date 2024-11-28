import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent {
  newMessage: string = '';

  messages = [
    { text: 'Hello!', time: '10:00 AM', isSent: true },
    { text: 'Hi there!', time: '10:01 AM', isSent: false },
    { text: 'How are you?', time: '10:02 AM', isSent: true },
  ];

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isSent: true,
      });
      this.newMessage = '';
    }
  }
}
