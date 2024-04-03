import { Component, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Validators } from '@angular/forms';

import { ChatbookService } from "./chatbook.service";
import { CommonModule } from "@angular/common";


export interface ChatbookData {
  _id: string;
  name: string;
  message: string;
}

@Component({
  selector: "app-chatbook",
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: "./chatbook.component.html",
  styleUrl: "./chatbook.component.css",
})
export class ChatbookComponent {
  private chatbookService = inject(ChatbookService);
  public data: ChatbookData[] = [];
  public loaded: boolean = false;
  displayedColumns: string[] = ["_id", "name", "message"];

  messageForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])
  })

  ngOnInit() {
    this.getChatbook();
  }

  getRecord(row: any) {
    this.messageForm.patchValue(row);
  }

  getChatbook() {
    this.chatbookService.getChatbook().subscribe((data) => {
      this.data = data;
      this.loaded = true;
    });
  }

  onSubmit() {
    this.chatbookService.postChatbook(this.messageForm.value).subscribe((data) => {
      console.log(data.message);
      this.getChatbook();
    })
    this.messageForm.reset();
  }

}
