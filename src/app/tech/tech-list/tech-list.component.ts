import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Device } from 'src/app/types/device';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css'],
})
export class TechListComponent implements OnInit {
  devices: Device[] = [];
  isEmpty!: boolean;
  isLoading: boolean = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getDevices();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }


  async getDevices() {
    this.devices = await this.api.getDevices() as Device[]
  }
}
