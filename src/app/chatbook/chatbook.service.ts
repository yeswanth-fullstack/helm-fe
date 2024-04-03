import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatbookData } from './chatbook.component';

@Injectable({
  providedIn: 'root'
})
export class ChatbookService {

  private chatbookUrl = environment.backendUri + '/api';

  constructor(private http:HttpClient) { }

  public getChatbook(): Observable<ChatbookData[]> {
    return this.http.get<ChatbookData[]>(this.chatbookUrl);
  }

  public postChatbook(data: any): Observable<ChatbookData> {
    return this.http.post<ChatbookData>(this.chatbookUrl, data);
  }

}
