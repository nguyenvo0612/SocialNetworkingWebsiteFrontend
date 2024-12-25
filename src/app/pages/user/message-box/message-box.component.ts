import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth-service';

interface Message {
  conversationId: number;
  accountId1: number;
  accountId2: number;
  senderId: number;
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  conversationId: number | null = null;
  currentAccountId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.currentAccountId = this.authService.getAccountId();
    
    this.route.queryParams.subscribe(params => {
      this.conversationId = params['conversationId'];
      if (this.conversationId) {
        this.loadMessages();
      }
    });
  }

  loadMessages() {
    if (this.conversationId) {
      this.http.get<Message[]>(`http://localhost:8080/api/messages/messages-box/${this.conversationId}`)
        .subscribe(data => {
          this.messages = data;
        });
    }
  }

  sendMessage() {
    if (this.newMessage.trim() && this.conversationId && this.currentAccountId) {
      const message = {
        conversationId: this.conversationId,
        senderId: this.currentAccountId,
        content: this.newMessage,
      };

      this.http.post<Message>('http://localhost:8080/api/messages/send', message)
        .subscribe(response => {
          this.messages.push(response);
          this.newMessage = '';
        });
    }
  }

  isCurrentUserMessage(message: Message): boolean {
    return message.senderId === this.currentAccountId;
  }
}
