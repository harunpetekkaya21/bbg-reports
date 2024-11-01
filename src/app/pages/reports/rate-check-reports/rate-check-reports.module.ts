import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateCheckReportsRoutingModule } from './rate-check-reports-routing.module';
import { RateCheckReportsComponent } from './rate-check-reports.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    RateCheckReportsComponent
  ],
  imports: [
    CommonModule,
    RateCheckReportsRoutingModule,
    CalendarModule ,
    FormsModule,
    ListboxModule ,
    TableModule ,
    RadioButtonModule ,
    ToastModule,
    ButtonModule

  ]
})
export class RateCheckReportsModule { }
