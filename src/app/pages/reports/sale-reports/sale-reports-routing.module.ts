import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleReportsComponent } from './sale-reports.component';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MonthlyComponent } from './monthly/monthly.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: SaleReportsComponent },
    { path: 'daily', component: DailyComponent },///reports/sales/daily
		{ path: 'weekly', component: WeeklyComponent },///reports/sales/weekly
		{ path: 'monthly', component: MonthlyComponent },///reports/sales/monthly
		
	])],
  exports: [RouterModule]
})
export class SaleReportsRoutingModule { }
