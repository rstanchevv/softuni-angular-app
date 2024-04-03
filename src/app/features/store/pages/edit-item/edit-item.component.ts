import { Component, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../../services/store.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { urlValidator } from 'src/app/shared/utils/url-validator';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.page.html',
  styleUrls: ['./edit-item.page.css'],
})
export class EditItemPage implements OnInit {
  errorMessage: string | null = null;
  currentValues: Device = {
    name: '',
    details: '',
    boughtBy: '',
    ownerId: '',
    img: '',
    price: '',
    deviceId: '',
  };
  editForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    details: ['', [Validators.required, Validators.minLength(10)]],
    img: ['', [Validators.required, urlValidator]],
    price: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.apiService
        .getSingleDevice(id)
        .then((res) => {
          this.currentValues = res! as Device;
        })
        .then(() => {
          this.editForm.patchValue({
            name: this.currentValues.name,
            details: this.currentValues.details,
            price: this.currentValues.price,
            img: this.currentValues.img,
          });
        })
        .catch((err) => console.log(err));
    });
  }

  onSubmit() {
    if (this.editForm.invalid) {
      console.log('error');
      return;
    }
    this.activatedRoute.params.subscribe((v) => {
      const id = v['id'];
      this.apiService
        .editDevice(id, this.editForm.value)
        .then(() => {
          this.router.navigate(['/store']);
        })
        .catch((e) => {
          this.errorMessage = e;
          this.hideErrorMessage();
        });
    });
  }

  hideErrorMessage(): void {
    setTimeout(() => {
      this.errorMessage = null;
    }, 2000);
  }

  onReset() {
    this.editForm.reset();
  }
}
