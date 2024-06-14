import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';


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
    CheckboxModule,
    TabMenuModule,
  ]
})
export class SharedModule { }
