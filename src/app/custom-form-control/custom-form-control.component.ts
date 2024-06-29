// src/app/components/custom-form-control/custom-form-control.component.ts
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-form-control',
  template: `<input type="text" (input)="handleInput($event)" (blur)="onTouched()">`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomFormControlComponent),
    multi: true
  }]
})
export class CustomFormControlComponent implements ControlValueAccessor {
  private value!: string;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Ensure the event target is an HTMLInputElement
  handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.onChange(inputElement.value);
    }
  }
}
