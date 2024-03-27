import { Component, OnDestroy, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { AuthUser } from 'src/app/models/authUser';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage {
  constructor(private authService: AuthService) {}
  get email() {
    return this.authService.user?.user.email;
  }

  get createdAt() {
    const timestamp = this.authService.user?.user.metadata.creationTime;
    return timestamp;
  }
}
