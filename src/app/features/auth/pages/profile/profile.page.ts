import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Device } from 'src/app/models/Device';
import { ApiService } from 'src/app/features/store/services/store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  constructor(
    private authService: AuthService,
    private storeSerice: ApiService
  ) {}
  devices!: Device[];
  boughtDevices!: Device[];
  owner!: string;
  isEmpty!: boolean
  get email() {
    return this.authService.user?.user.email;
  }

  get createdAt() {
    const timestamp = this.authService.user?.user.metadata.creationTime;
    return timestamp;
  }

  ngOnInit(): void {
    this.getBoughtDevices()
  }

  getBoughtDevices() {
    this.storeSerice
      .getAllDeivces()
      .then((res) => {
        this.devices = res as Device[];
      })
      .then(() => {
        this.boughtDevices = this.devices.filter(x => x.boughtBy == this.authService.user?.user.uid
        )
        if (this.boughtDevices.length < 1){
          this.isEmpty = true;
        };
      });
  }
}
