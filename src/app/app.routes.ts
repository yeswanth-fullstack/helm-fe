import { Routes } from '@angular/router';
import { ChatbookComponent } from './chatbook/chatbook.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'chatbook', component: ChatbookComponent }
];
