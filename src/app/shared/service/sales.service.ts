import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { salesByDateDTO } from '../../models/salesByDateDTO';
import { Observable } from 'rxjs';


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

 
}
