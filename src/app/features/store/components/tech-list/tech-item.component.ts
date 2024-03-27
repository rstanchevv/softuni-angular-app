import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/Device';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-item.component.html',
  styleUrls: ['./tech-item.component.css'],
})


export class TechItemComponent implements OnInit {
  errorMessage: string | null = null;
  isLoading: boolean = true;
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
        this.isLoading = false;
        console.log(this.device)
      }).catch(err => {
        this.errorMessage = err
      })
    });
  }
}
