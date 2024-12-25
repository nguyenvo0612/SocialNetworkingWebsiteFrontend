import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../service/auth-service';

interface ChatMessage {
  conversationId: number;
  partnerName: string;
  lastMessage: string;
  lastMessageTime: string;
  lastMessageSenderId: number;
}
 
@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css',
})
export class ChatListComponent implements OnInit {
  chats: ChatMessage[] = [];
  currentAccountId: number | null = null;

  constructor(private router: Router, private http: HttpClient,private authService: AuthService) {}

  ngOnInit() {
    this.currentAccountId = this.authService.getAccountId();
    this.loadChats();
  }

  loadChats() {
    const accountId= this.authService.getAccountId()
    console.log(accountId);
    
    this.http.get<ChatMessage[]>(`http://localhost:8080/api/messages/last-messages/${accountId}`)
      .subscribe(data => {
        this.chats = data;
      });
  }

  selectChat(chat: ChatMessage) {
    this.router.navigate(['/message-box'], {
      queryParams: { conversationId: chat.conversationId },
    });
  }

  
}
