import { Component } from '@angular/core';
import { ApiService } from '../../services/store.service';
import { Device } from 'src/app/models/Device';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.css']
})
export class StorePage {
  devices: Device[] = [];
  isEmpty: boolean = false;
  isLoading: boolean = true;

  get isAuthenticated() {
    return this.authService.isLogged;
  }
  constructor(private api: ApiService,private authService: AuthService) {}

  ngOnInit(): void {
    this.getAllDevcies();
  }

  getAllDevcies() {
    this.api.getAllDeivces().then((res) => {
      this.devices = res as Device[]
      if (this.devices.length < 1) {
        this.isEmpty = true;
      }
      this.isLoading = false;
    }).catch(err => console.log(err))
  }

}