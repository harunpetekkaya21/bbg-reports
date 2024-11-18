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
import { WinterTop10Component } from './season/winter/winter-top-10/winter-top-10.component';
import { WinterTop20Component } from './season/winter/winter-top-20/winter-top-20.component';
import { WinterTop50Component } from './season/winter/winter-top-50/winter-top-50.component';
import { SummerTop10Component } from './season/summer/summer-top-10/summer-top-10.component';
import { SummerTop20Component } from './season/summer/summer-top-20/summer-top-20.component';
import { SummerTop50Component } from './season/summer/summer-top-50/summer-top-50.component';




@NgModule({
  declarations: [
    RateCheckReportsComponent,
    WinterTop10Component,
    WinterTop20Component,
    WinterTop50Component,
    SummerTop10Component,
    SummerTop20Component,
    SummerTop50Component,

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
    ButtonModule,

    

  ]
})
export class RateCheckReportsModule { }
