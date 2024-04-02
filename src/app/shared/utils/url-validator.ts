import { ValidatorFn } from '@angular/forms';

export function urlValidator(): ValidatorFn {
  const regExp = new RegExp('^https?://', 'g')
  return (control) => {
    const isUrlValid = control.value === '' || regExp.test(control.value);
    return isUrlValid ? null : { urlValidator: true };
  };
}
