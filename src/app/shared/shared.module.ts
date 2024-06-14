import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [

    FormsModule,

    // PrimeNG
    ButtonModule,
    InputSwitchModule,

  ]
})
export class SharedModule { }
