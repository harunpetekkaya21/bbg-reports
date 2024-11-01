import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleReportsRoutingModule } from './sale-reports-routing.module';
import { SaleReportsComponent } from './sale-reports.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    SaleReportsComponent
  ],
  imports: [
    CommonModule,
    SaleReportsRoutingModule,
    CalendarModule ,
    FormsModule,
    ChartModule
    
  ]
})
export class SaleReportsModule { }
