import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            // {
            //     label: 'Reports',
            //     items: [
            //         { label: 'Rate Check', icon: 'pi pi-fw pi-id-card', routerLink: ['/reports/rate-check'] },
            //         { label: 'Sales', icon: 'pi pi-fw pi-check-square', routerLink: ['/reports/sales'] },

            //     ]
            // },
            {
                label: 'Reports',
                items: [
                    {
                        label: 'Rate Check', icon: 'pi pi-fw pi-id-card',
                        items: [
                            { label: 'Rate Check', icon: '' ,routerLink: ['/reports/rate-check'] },
                            {
                                label: 'Winter Reports', icon: '',
                                items: [
                                    { label: 'Top10', icon: '',routerLink: ['/reports/rate-check/winter/top10'] },
                                    { label: 'Top20', icon: '',routerLink: ['/reports/rate-check/winter/top20'] },
                                    { label: 'Top50', icon: '' ,routerLink: ['/reports/rate-check/winter/top50']},
                                ]
                            },
                            {
                                label: 'Summer Reports', icon: '',
                                items: [
                                    { label: 'Top10', icon: '' ,routerLink: ['/reports/rate-check/summer/top10'] },
                                    { label: 'Top20', icon: '',routerLink: ['/reports/rate-check/summer/top20'] },
                                    { label: 'Top50', icon: '',routerLink: ['/reports/rate-check/summer/top50'] },
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Sales', icon: 'pi pi-fw pi-check-square',
                        items: [
                            { label: 'Sales', icon: '', routerLink: ['/reports/sales'] },
                            { label: 'Daily', icon: '' ,routerLink: ['/reports/sales/daily']},
                            { label: 'Weekly', icon: '' ,routerLink: ['/reports/sales/weekly']},
                            { label: 'Monthly', icon: '' ,routerLink: ['/reports/sales/monthly']},
                        ]
                    },
                ]
            }

        ];
    }
}
