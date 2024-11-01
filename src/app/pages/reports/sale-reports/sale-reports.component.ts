import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../layout/service/app.layout.service';
import { salesByDateDTO } from '../../../models/salesByDateDTO';
import { SalesService } from '../../../shared/service/sales.service';

@Component({
  selector: 'app-sale-reports',
  templateUrl: './sale-reports.component.html',


})
export class SaleReportsComponent implements OnInit, OnDestroy {

  //date
  date: Date[] | undefined;

  selectedDate: string = "";

  //sales
  sale:salesByDateDTO={};

  //chart
  subscription: Subscription;
  pieData: any;
  pieOptions: any;



  constructor(private layoutService: LayoutService,private salesService:SalesService) {

    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe((config) => {
        this.initCharts();
      });
  }


  ngOnInit() {
    this.initCharts();
    
    
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.pieData = {
      labels: ['Final Cost', 'Final Sales', 'Final Profit', 'Final Profit %', 'Room Night', 'Paxes', 'Reservation Count'],
      datasets: [
        {
          data: [],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-700'),
            documentStyle.getPropertyValue('--green-600'),
            documentStyle.getPropertyValue('--yellow-600'),

            documentStyle.getPropertyValue('--cyan-800'),
            documentStyle.getPropertyValue('--pink-700'),
            documentStyle.getPropertyValue('--teal-800'),
            documentStyle.getPropertyValue('--orange-700'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--yellow-400'),

            documentStyle.getPropertyValue('--cyan-600'),
            documentStyle.getPropertyValue('--pink-300'),
            documentStyle.getPropertyValue('--teal-600'),
            documentStyle.getPropertyValue('--orange-500'),
          ]
        }]
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

  }


  onSelectedDate($event: any) {

    //let date = new Date($event).getMonth();
    let day = new Date($event).getDate();//Day
    let mount = new Date($event).getMonth() + 1;//Mount
    let year = new Date($event).getFullYear();//Year

    this.selectedDate = `${year}-${mount}-${day}`
    
    //alert("" + this.selectedDate);

    this.getSales();
    this.fillChart();


  }
  fillChart() {
    this.pieData.datasets[0].data=[];
    this.salesService.getSalesByDate2(this.selectedDate).subscribe(x=>{
      this.pieData.datasets[0].data.push(x.finalCost);
      this.pieData.datasets[0].data.push(x.finalSales);
      this.pieData.datasets[0].data.push(x.finalProfit);
      this.pieData.datasets[0].data.push(x.finalProfitPercent);
      this.pieData.datasets[0].data.push(x.roomNights);
      this.pieData.datasets[0].data.push(x.paxes);
      this.pieData.datasets[0].data.push(x.reservationCount);
      
      this.pieData = { ... this.pieData };
    })
  }

  getSales(){
    this.salesService.getSalesByDate(this.selectedDate).then(data => this.sale=data);
    
  }
}
