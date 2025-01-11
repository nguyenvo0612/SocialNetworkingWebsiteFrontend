import { Component, OnInit, OnDestroy } from '@angular/core';
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

interface MessagesDTO {
  conversation: number;
  sender: number;
  content: string;
}

@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  newMessage: string = '';
  conversationId: number | null = null;
  currentAccountId: number | null = null;
  isSending: boolean = false;
  wsSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
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
    if (this.newMessage.trim() && this.conversationId && this.currentAccountId && !this.isSending) {
      this.isSending = true;
      const messageDTO: MessagesDTO = {
        conversation: this.conversationId,
        sender: this.currentAccountId,
        content: this.newMessage.trim()
      };

      this.http.post<Message>('http://localhost:8080/api/messages/create', messageDTO)
        .subscribe({
          next: (response) => {
            const newMessage: Message = {
              conversationId: this.conversationId!,
              accountId1: response.accountId1,
              accountId2: response.accountId2,
              senderId: this.currentAccountId!,
              content: this.newMessage.trim(),
              createdAt: new Date().toISOString()
            };
            
            this.messages.push(newMessage);
            this.newMessage = '';
            this.isSending = false;
            
            this.scrollToBottom();
          },
          error: (error) => {
            console.error('Error sending message:', error);
            this.isSending = false;
          }
        });
    }
  }



  private scrollToBottom(): void {
    setTimeout(() => {
      const messageContainer = document.querySelector('.messages-container');
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    }, 100);
  }

  isCurrentUserMessage(message: Message): boolean {
    return message.senderId === this.currentAccountId;
  }

  ngOnDestroy() {
    if (this.wsSubscription) {
      this.wsSubscription.unsubscribe();
    }
  }
}
