import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateCheckReportsComponent } from './rate-check-reports.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: RateCheckReportsComponent }
	])],
  exports: [RouterModule]
})
export class RateCheckReportsRoutingModule { }
