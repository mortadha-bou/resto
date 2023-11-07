import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationDTO } from '../Models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string="http://localhost:3090/users"
  constructor(private httpClient:HttpClient) { }
  
  //Response (user object id )
  addUser(user:any){
    return this.httpClient.post(this.userUrl,user);
  }
  //reponse(array of objects)
  getAllUsers(){
    return this.httpClient.get(this.userUrl);
  }
  getUserByLoginAndPassword(email:String ,password : String){
    return this.httpClient.get(this.userUrl)

  }
  // reponse :plat object
  getUserById(id:any){
    //return this.httpClient.get(this.userUrl + "/" + id) ou
    return this.httpClient.get(`${this.userUrl}/${id}`);
  }
  updateUser(newUser:any){
    return this.httpClient.post(`${this.userUrl}`,newUser)
  }
  //Reponse boolen
  deleteUser(id:any){
    return this.httpClient.delete(`${this.userUrl}/${id}`);
  }

  
}
