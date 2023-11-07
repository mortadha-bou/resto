import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl:string="http://localhost:3090/reservations"
  constructor(private httpClient:HttpClient) { }
    //Response (reservation object id )
    addReservation(plat:any){
      return this.httpClient.post(this.reservationUrl,plat);
    }
    //reponse(array of objects)
    getAllReservation(){
      return this.httpClient.get(this.reservationUrl);
    }
    // reponse :plat object
    getReservationById(id:any){
      //return this.httpClient.get(this.reservationUrl + "/" + id) ou
      return this.httpClient.get(`${this.reservationUrl}/${id}`);
    }
    updateReservation(newReservation:any){
      return this.httpClient.post(`${this.reservationUrl}`,newReservation)
    }
    //Reponse boolen
    deleteReservationById(id:any){
      return this.httpClient.delete(`${this.reservationUrl}/${id}`);
    }
}
