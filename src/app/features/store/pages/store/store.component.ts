import { Component } from '@angular/core';
import { ApiService } from '../../services/store.service';
import { Device } from 'src/app/models/Device';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.css']
})
export class StorePage {

  devices: Device[] = [];
  isEmpty: boolean = false;
  isLoading: boolean = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getAllDevcies();
  }

  getAllDevcies() {
    this.api.getAllDeivces().then((res) => {
      this.devices = res as Device[]
      console.log(this.devices)
      if (this.devices.length < 1) {
        this.isEmpty = true;
      }
      this.isLoading = false;
    }).catch(err => console.log(err))
  }

}