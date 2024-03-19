import { Component, inject } from '@angular/core';
import { ChatbookService } from './chatbook.service';
import { CommonModule } from '@angular/common';

export interface ChatbookData {
  name: string;
  message: string;
}

@Component({
  selector: 'app-chatbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbook.component.html',
  styleUrl: './chatbook.component.css'
})
export class ChatbookComponent {
  private chatbookService = inject(ChatbookService);
  public data: ChatbookData[] = [];
  public loaded: boolean = false;

  ngOnInit() {
    this.chatbookService.getChatbook().subscribe(data => {
      this.data = data;
      this.loaded = true;
    });
  }

}
