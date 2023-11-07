import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
chefUrl:string="http://localhost:3090/chefs"
  constructor(private httpClient:HttpClient) { }
  //Response (chef object id )
  addChef(chef:any){
    return this.httpClient.post(this.chefUrl,chef);
  }
  //reponse(array of objects)
  getAllChefs(){
    return this.httpClient.get(this.chefUrl);
  }
  // reponse :chef object
  getChefById(id:any){
    //return this.httpClient.get(this.matchUrl + "/" + id) ou
    return this.httpClient.get(`${this.chefUrl}/${id}`);
  }
  updateChef(newChef:any){
    return this.httpClient.post(`${this.chefUrl}`,newChef)
  }
  //Reponse boolen
  deleteChef(id:any){
    return this.httpClient.delete(`${this.chefUrl}/${id}`);
  }
}
