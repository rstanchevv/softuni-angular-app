import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/features/store/services/store.service';
import { Device } from 'src/app/models/Device';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css'],
})
export class TechListComponent implements OnInit {
  devices: Device[] = [];
  isEmpty: boolean = false;
  isLoading: boolean = true;
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getThreeDevices();
  }

  getThreeDevices() {
    this.api
      .getAllDeivces()
      .then((res) => {
        this.devices = res.slice(-3) as Device[];
        if (this.devices.length < 1) {
          this.isEmpty = true;
        }
        this.isLoading = false;
      })
      .catch((err) => console.log(err));
  }
}
