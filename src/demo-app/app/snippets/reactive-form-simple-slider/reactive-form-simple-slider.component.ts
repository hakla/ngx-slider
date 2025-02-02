import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Options } from '@local/ngx-slider';

@Component({
  selector: 'app-reactive-form-simple-slider',
  templateUrl: './reactive-form-simple-slider.component.html',
})
export class ReactiveFormSimpleSliderComponent {
  sliderControl: UntypedFormControl = new UntypedFormControl(100);

  options: Options = {
    floor: 0,
    ceil: 250,
  };

  disable(): void {
    this.sliderControl.disable();
  }

  enable(): void {
    this.sliderControl.enable();
  }

  resetForm(): void {
    this.sliderControl.reset(100);
  }
}
