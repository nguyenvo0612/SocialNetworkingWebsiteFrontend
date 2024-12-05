import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class ProfileService {
  backendUrl = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  findProfileByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.backendUrl}/api/profile/find/${userId}`);
  }

  createProfile(profileDTO: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/api/profile/create`, profileDTO);
  }
}
