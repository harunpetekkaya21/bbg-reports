import { Component, OnInit, ViewChild } from '@angular/core';
import { RateCheckService } from '../../../shared/service/rate-check.service';
import { hotelsDto } from '../../../models/hotelsDTO';
import { MessageService } from 'primeng/api';
import { ratesDto } from 'src/app/models/ratesDto';
import { listRateDatesDto } from 'src/app/models/listRateDatesDto';
import { Router } from '@angular/router';
import { Listbox } from 'primeng/listbox';
import { listRoomsDto } from 'src/app/models/listRoomsDto';
import { ratesDto2 } from 'src/app/models/ratesDto2';




@Component({
  selector: 'app-rate-check-reports',
  templateUrl: './rate-check-reports.component.html',
  providers: [MessageService]
})
export class RateCheckReportsComponent implements OnInit {
  @ViewChild('myListbox') myListboxComponent: Listbox;
  //rates
  rates: ratesDto[];
  //rates2:ratesDto2[];

  //radio buttons 


  // selectedFilter: any = null;

  // filters: any[] = [
  //   { name: 'By Hotel and Dates', key: '1' },
  //   { name: 'By Hotel', key: '2' },
  //   { name: 'By Dates', key: '3' },

  // ];

  //date
  dates!: listRateDatesDto[];
  selectedDate: listRateDatesDto;

  rooms!: listRoomsDto[];
  selectedRoom: listRoomsDto;

  // selectedStartDate: string | undefined;
  // selectedEndDate: string | undefined;

  // startDate: Date | undefined;
  // endDate: Date | undefined;


  //table

  // products!: any;

  //hotels
  hotels!: hotelsDto[];


  selectedHotel!: hotelsDto;

  constructor(private rateCheckService: RateCheckService, public router: Router) {

  }
  ngOnInit() {

    //this.selectedFilter = this.filters[0];
    this.rateCheckService.getAllHotels().then(data => this.hotels = data);

  }


  // onSelectedStartDate($event: any) {

  //   //let date = new Date($event).getMonth();
  //   let day = new Date($event).getDate();//Day
  //   let mount = new Date($event).getMonth() + 1;//Mount
  //   let year = new Date($event).getFullYear();//Year

  //   this.selectedStartDate = `${year}-${mount}-${day}`
  //   //alert("date 1" + this.selectedStartDate);


  // }

  // onSelectedEndDate($event: any) {

  //   //let date = new Date($event).getMonth();
  //   let day = new Date($event).getDate();//Day
  //   let mount = new Date($event).getMonth() + 1;//Mount
  //   let year = new Date($event).getFullYear();//Year

  //   this.selectedEndDate = `${year}-${mount}-${day}`
  //   //alert("Date 2" + this.selectedEndDate);


  // }

  onSelectHotel($event: any) {
    //console.log($event);
    this.selectedHotel = $event.option;
    this.hotels = [];
    this.hotels.push(this.selectedHotel)
    this.rateCheckService.getRateDatesByHotel(this.selectedHotel.id).then(data => this.dates = data);


  }
  onSelectDate($event: any) {
    //console.log($event);
    this.selectedDate = $event.option;
    this.dates = [];
    this.dates.push(this.selectedDate)
    let dates = this.selectedDate.date.split("|");
    this.rateCheckService.getRatesByHotelAndDates(this.selectedHotel.id, dates[0], dates[1]).then(data => this.rooms = data);

  }

  onSelectRoom($event: any) {
    this.selectedRoom = $event.option;

    let dates=this.selectedDate.date.split("|");
    
    this.rateCheckService.getRatesByRoomAndHotelAndDates(this.selectedHotel.id, dates[0], dates[1],this.selectedRoom.roomType).then(data => this.rates = data);


  }

  // getRateCheckReport() {

  //   //get by hotels and date
  //   if (this.selectedFilter.key == "1") {

  //     if (this.selectedHotel==undefined ) {
  //       this.showErrorChooseHotel();
  //       return;
  //     }
  //     if (this.selectedEndDate==undefined) {
  //       this.showErrorChooseDate();
  //       return
  //     }
  //     if ( this.selectedStartDate==undefined) {
  //       this.showErrorChooseDate();
  //       return
  //     }

  //     this.rates = [];
  //     this.rateCheckService.getRatesByHotelAndDates(this.selectedHotel.id, this.selectedStartDate, this.selectedEndDate).then(data => this.rates = data);

  //   }
  //   if (this.selectedFilter.key == "2") {
  //     //get by hotels 
  //     if (this.selectedHotel==undefined ) {
  //       this.showErrorChooseHotel();
  //       return;
  //     }
  //     this.rates = [];
  //     this.rateCheckService.getRatesByHotel(this.selectedHotel.id).then(data => this.rates = data);
  //   }

  //   if (this.selectedFilter.key == "3") {
  //     //get by hotels 
  //     if (this.selectedEndDate==undefined) {
  //       this.showErrorChooseDate();
  //       return
  //     }
  //     if ( this.selectedStartDate==undefined) {
  //       this.showErrorChooseDate();
  //       return
  //     }
  //     this.rates = [];
  //     this.rateCheckService.getRatesByDates(this.selectedStartDate, this.selectedEndDate).then(data => this.rates = data);

  //   }



  //   //
  //   //get by hotel and dates



  // }
  // showErrorChooseHotel() {
  //   this.messageService.add({ severity: 'error', summary: 'Lutfen bir hotel seciniz', });
  // }

  // showErrorChooseDate() {
  //   this.messageService.add({ severity: 'error', summary: 'Lutfen tarih seciniz', });
  // }

  clear() {

    this.rateCheckService.getAllHotels().then(data => this.hotels = data);
    this.dates = [];
this.rooms=[];
    this.rates = [];
  }


}
