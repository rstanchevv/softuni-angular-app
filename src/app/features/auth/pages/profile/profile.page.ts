import { Component, OnDestroy, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { AuthUser } from 'src/app/models/authUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage {
  get email() {
    return JSON.parse(localStorage.getItem('token') as AuthUser | any)
      .email as string;
  }

  get createdAt() {
    const timestamp = Number(
      JSON.parse(localStorage.getItem('token') as AuthUser | any).createdAt
    );
    return this.convetDate(timestamp).toLocaleDateString("en-Us");
  }

  convetDate(timestamp: number) {
    let date = new Date(timestamp);
    return date;
  }
  
}
