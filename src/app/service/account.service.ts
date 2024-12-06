import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private accountSubject = new BehaviorSubject<any>(null);
  account$ = this.accountSubject.asObservable();

  setUser(account: any) {
    this.accountSubject.next(account); // Phát ra thông tin người dùng mới
  }
}
