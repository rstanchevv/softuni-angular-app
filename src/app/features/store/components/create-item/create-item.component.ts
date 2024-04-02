import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/store.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent {
  errorMessage: string | null = null;
  createForm = this.fb.group({
    name: '',
    details: '',
    img: '',
    price: '',
  });
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    const ownerId = this.authService.user?.user.uid;
    const { name, details, img, price } = this.createForm.value;
    this.apiService
      .createDevice(name!, details!, img!, price!, ownerId!)
      .then(() => {
        this.router.navigate(['/store']).catch((err) => {
          console.log(err);
        });
      });
  }
}
