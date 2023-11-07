import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationDTO } from 'src/app/Models/auth.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm! : FormGroup;
  user !: any ; 
  userr !:any
  constructor(private userService:UserService,private router:Router){}
  
login(){
 // let authentificationDTO= new AuthentificationDTO();
   // authentificationDTO.email=this.user.email;
    //authentificationDTO.password=this.user.password;
   //this.userr= this.userService.getUserByLoginAndPassword(this.user.email,this.user.password).subscribe( data=>{this.user=data;
    //console.log(this.user)},
    //error=>{});
   
      this.router.navigate([`home/`]);
        
    }
    
      }
      

