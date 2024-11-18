import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateCheckReportsComponent } from './rate-check-reports.component';
import { WinterTop10Component } from './season/winter/winter-top-10/winter-top-10.component';
import { WinterTop20Component } from './season/winter/winter-top-20/winter-top-20.component';
import { WinterTop50Component } from './season/winter/winter-top-50/winter-top-50.component';
import { SummerTop10Component } from './season/summer/summer-top-10/summer-top-10.component';
import { SummerTop20Component } from './season/summer/summer-top-20/summer-top-20.component';
import { SummerTop50Component } from './season/summer/summer-top-50/summer-top-50.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: RateCheckReportsComponent },
		{ path: 'winter/top10', component: WinterTop10Component },///reports/rate-check/winter/top10
		{ path: 'winter/top20', component: WinterTop20Component },///reports/rate-check/winter/top10
		{ path: 'winter/top50', component: WinterTop50Component },///reports/rate-check/winter/top10
    { path: 'summer/top10', component: SummerTop10Component },///reports/rate-check/summer/top10
		{ path: 'summer/top20', component: SummerTop20Component },///reports/rate-check/summer/top10
		{ path: 'summer/top50', component: SummerTop50Component }///reports/rate-check/summer/top10
	])],
  exports: [RouterModule]
})
export class RateCheckReportsRoutingModule { }
