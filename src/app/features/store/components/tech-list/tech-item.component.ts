import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { AuthService } from 'src/app/features/auth/services/auth.service';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  get isAuthenticated(){
    return this.authService.isLogged
  }

  get isOwner() {
    let deviceOwner;
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.storeService.getSingleDevice(id).then((res) => {
        deviceOwner = res as Device;
        return deviceOwner.ownerId == this.authService.user?.user.uid
      }).catch(err => console.log(err))
    })
    return false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.storeService
        .getSingleDevice(id)
        .then((res) => {
          this.device = res as Device;
          this.isLoading = false;
        })
        .catch((err) => {
          this.errorMessage = err;
        });
    });
  }

  deleteDevice() {
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.storeService
        .deleteDevice(id)
        .then(() => {
          this.router.navigate(['/store']);
        })
        .catch((err) => console.log(err));
    });
  }

  buyDevice() {
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.storeService
        .buyDevice(id)
        .then(() => {
          this.router.navigate(['/profile']);
        })
        .catch((err) => console.log(err));
    })
  }
}
