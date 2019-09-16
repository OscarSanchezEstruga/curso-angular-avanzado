import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextComponent} from './components/input-text/input-text.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    InputTextComponent,
  ],
})
export class ControlsModule {
}
