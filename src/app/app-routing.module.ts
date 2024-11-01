import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
        {
            path: '', component: AppLayoutComponent,
            children:[
              
              { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
              { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) },
            
            ]
            
        },
        { path: 'auth', loadChildren: () => import('./shared/modules/auth/auth.module').then(m => m.AuthModule) },
        { path: 'notfound', component: NotfoundComponent },
        { path: '**', redirectTo: '/notfound' },
    ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
