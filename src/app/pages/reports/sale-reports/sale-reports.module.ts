import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleReportsRoutingModule } from './sale-reports-routing.module';
import { SaleReportsComponent } from './sale-reports.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';


@NgModule({
  declarations: [
    SaleReportsComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,

  ],
  imports: [
    CommonModule,
    SaleReportsRoutingModule,
    CalendarModule ,
    FormsModule,
    ChartModule,
    RippleModule,
    ToastModule
 
  ]
})
export class SaleReportsModule { }
