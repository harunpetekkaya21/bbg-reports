import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleReportsComponent } from './sale-reports.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: SaleReportsComponent }
	])],
  exports: [RouterModule]
})
export class SaleReportsRoutingModule { }
