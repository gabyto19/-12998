import { AbstractControl,ValidationErrors, ValidatorFn } from '@angular/forms';

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(control.value);
    return valid ? null : { 'invalidUrl': { value: control.value } };
  };
}
export function websiteValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value.includes('.')) {
      return { websiteInvalid: true };
    }
    return null;
  }};