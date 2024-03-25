import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/Device';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css'],
})
export class TechListComponent implements OnInit {
  device!: Device;
  constructor(
    private storeService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.storeService.getSingleDevice(id).then((res) => {
        this.device = res as Device
      });
    });
  }
}
