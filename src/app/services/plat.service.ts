import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platUrl:string="http://localhost:3090/plats"
  constructor(private httpClient:HttpClient) { }
  
  //Response (plat object id )
  addPlat(plat:any){
    return this.httpClient.post(this.platUrl,plat);
  }
  //reponse(array of objects)
  getAllPlats(){
    return this.httpClient.get(this.platUrl);
  }
  // reponse :plat object
  getPlatById(id:any){
    //return this.httpClient.get(this.platUrl + "/" + id) ou
    return this.httpClient.get(`${this.platUrl}/${id}`);
  }
  updatePlat(newPlat:any){
    return this.httpClient.post(`${this.platUrl}`,newPlat)
  }
  //Reponse boolen
  deletePlat(id:any){
    return this.httpClient.delete(`${this.platUrl}/${id}`);
  }
  
}
