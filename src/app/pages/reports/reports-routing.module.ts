import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'rate-check', loadChildren: () => import('./rate-check-reports/rate-check-reports.module').then(m => m.RateCheckReportsModule) },
    { path: 'sales', loadChildren: () => import('./sale-reports/sale-reports.module').then(m => m.SaleReportsModule) },
    
    
    { path: '**', redirectTo: '/notfound' }
])],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
