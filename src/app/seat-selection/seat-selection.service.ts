import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Showing } from '../model/showing';

@Injectable({
  providedIn: 'root'
})
export class SeatSelectionService {

  constructor(private _http: HttpClient) { }

  public getMovieInfoFromRemote(movieId: number): Observable<any> {
    return this._http.post<any>("http://localhost:8080/showing/movie/info", movieId);
  }

  public getCustomerInfoFromRemote(customer: Customer): Observable<any> {
    return this._http.get<any>("http://localhost:8080/customer/" + sessionStorage.getItem('cid'));
  }

  public getTakenSeatsFromRemote(showing: Showing): Observable<any> {
    return this._http.post<any>("http://localhost:8080/findTakenSeats", showing);
  }
}