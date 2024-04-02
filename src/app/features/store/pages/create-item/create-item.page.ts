import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/store.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { urlValidator } from 'src/app/shared/utils/url-validator';


@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.page.html',
  styleUrls: ['./create-item.page.css'],
})
export class CreateItemPage {
  errorMessage: string | null = null;
  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    details: ['', [Validators.required, Validators.minLength(10)]],
    img: ['', [Validators.required, urlValidator]],
    price: ['', [Validators.required]],
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

  onReset(){
    this.createForm.reset();
  }
}
