import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotelsDto } from '../../models/hotelsDTO';
import { environment } from '../../../environments/environment.development';
import { ratesDto } from '../../models/ratesDto';
import { Observable } from 'rxjs';
import { listRateDatesDto } from 'src/app/models/listRateDatesDto';
import { listRoomsDto } from 'src/app/models/listRoomsDto';
import { listRatesByRoomHotelDateDto } from 'src/app/models/listRatesByRoomHotelDateDto';

@Injectable({
  providedIn: 'root'
})
export class RateCheckService {

  constructor(private http: HttpClient) { }


  getAllHotels(){
    return this.http.get<hotelsDto[]>(`${environment.apiBaseUrl}/api/Hotels/getallhotels`)
    .toPromise()
    .then(res => res as hotelsDto[])
    .then(data => data);
  }

  getRatesByHotelAndDates(hotelId:number,startDate:string,endDate:string){
    return this.http.get<ratesDto[]>(`${environment.apiBaseUrl}/api/Rates/getratestbyhotelanddates/${hotelId}/${startDate}/${endDate}`)
    .toPromise()
    .then(res => res as ratesDto[])
    .then(data => data);
  }

  getRatesByHotel(hotelId:number){
    return this.http.get<ratesDto[]>(`${environment.apiBaseUrl}/api/Rates/getlistratesbyHotel/${hotelId}`)
    .toPromise()
    .then(res => res as ratesDto[])
    .then(data => data);
  }

  getRatesByDates(startDate:string,endDate:string){
    return this.http.get<ratesDto[]>(`${environment.apiBaseUrl}/api/Rates/getbydates/${startDate}/${endDate}`)
    .toPromise()
    .then(res => res as ratesDto[])
    .then(data => data);
  }

  uploadRateCheckFile(formData:FormData){
    return this.http.post(`${environment.apiBaseUrl}/api/Files`,formData,
      {
      headers : new HttpHeaders()})


  }
  getRateCheckLastUpdatedDate(){
    return this.http.get<any>(`${environment.apiBaseUrl}/api/Rates/getLastDateTime`)
    .toPromise()
    .then(res => res as any)
    .then(data => data);

  }

  getRateDatesByHotel(hotelId:number){
    return this.http.get<listRateDatesDto[]>(`${environment.apiBaseUrl}/api/Rates/getlistratedatesbyHotel/${hotelId}`)
    .toPromise()
    .then(res => res as listRateDatesDto[])
    .then(data => data);
  }

  getRoomsByHotelAndDates(hotelId:number,startDate:string,endDate:string){
    return this.http.get<listRoomsDto[]>(`${environment.apiBaseUrl}/api/Rates/getroomsbyhotelanddate/${hotelId}/${startDate}/${endDate}`)
    .toPromise()
    .then(res => res as listRoomsDto[])
    .then(data => data);
  }
  getRatesByRoomAndHotelAndDates(hotelId:number,startDate:string,endDate:string,roomType:string){
    return this.http.get<ratesDto[]>(`${environment.apiBaseUrl}/api/Rates/getratesbyroomsandhotelanddate/${hotelId}/${startDate}/${endDate}/${roomType}`)
    .toPromise()
    .then(res => res as ratesDto[])
    .then(data => data);
  }

}
