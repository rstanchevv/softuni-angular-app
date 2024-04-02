import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { EmailDirective } from './validators/email.directive';
import { UrlDirective } from './validators/url.directive';


@NgModule({
  declarations: [LoadingSpinnerComponent, EmailDirective, UrlDirective],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, EmailDirective, UrlDirective],
})
export class SharedModule {}
