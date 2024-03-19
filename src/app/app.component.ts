import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbookComponent } from './chatbook/chatbook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatbookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-frontend';
}
