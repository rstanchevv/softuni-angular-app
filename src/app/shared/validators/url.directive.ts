import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { urlValidator } from '../utils/url-validator';

@Directive({
  selector: '[appUrl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UrlDirective,
      multi: true,
    },
  ],
})
export class UrlDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validatorFn = urlValidator()
    return validatorFn(control)
  }
}
