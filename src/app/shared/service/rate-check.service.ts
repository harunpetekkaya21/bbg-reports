import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hotelsDto } from '../../models/hotelsDTO';
import { environment } from '../../../environments/environment.development';
import { ratesDto } from '../../models/ratesDto';

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

}
