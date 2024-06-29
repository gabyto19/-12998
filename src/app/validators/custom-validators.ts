// custom-validators.ts
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(control.value);
    return valid ? null : { 'invalidUrl': { value: control.value } };
  };
}
