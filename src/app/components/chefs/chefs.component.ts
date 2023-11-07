import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit{
  chefsTab:any = [];
    constructor(private chefService:ChefService,
      private router:Router
      ){}
    ngOnInit(){
      this.chefsTab=[]
     this.chefService.getAllChefs().subscribe(
      data=>{this.chefsTab=data;
      console.log(this.chefsTab)},
      error=>{}
     );
      

    }
    deleteChef(id:any){
      this.chefService.deleteChef(id).subscribe();
      location.reload()
     }
     goToEdit(id:any){
      this.router.navigate([`editChef/${id}`])
      
     }
    
   // getallChefs(){
     // this.chefsTab = JSON.parse(localStorage.getItem("chefs") || "[]")
    //}

}
