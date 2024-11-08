import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { salesByDateDTO } from '../../models/salesByDateDTO';
import { Observable } from 'rxjs';
import { SalesFromFileDTO } from 'src/app/pages/dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  
  constructor(private http: HttpClient) { }


  getSalesByDate(date:string){
    return this.http.get<salesByDateDTO>(`${environment.apiBaseUrl}/api/Sales/getsalesbydate/${date}`)
    .toPromise()
    .then(res => res as salesByDateDTO)
    .then(data => data);
  }

  getSalesByDate2(date:string): Observable<salesByDateDTO> {
    return this.http.get<salesByDateDTO>(`${environment.apiBaseUrl}/api/Sales/getsalesbydate/${date}`)
  }

  uploadSalesFile(formData:FormData){
    return this.http.post(`${environment.apiBaseUrl}/api/Files`,formData,
      {
      headers : new HttpHeaders()})


  }

  uploadSaleDataFromFile(salesFromFileDTO:SalesFromFileDTO[]){
    return this.http.post(`${environment.apiBaseUrl}/api/Sales/uploadsaledatafromfile`,salesFromFileDTO,
      {
      headers : new HttpHeaders()})
  }

  getLastRecord(){
    return this.http.get<any>(`${environment.apiBaseUrl}/api/Sales/getlastrecord`)
    .toPromise()
    .then(res => res as any)
    .then(data => data);

  }
 
}
