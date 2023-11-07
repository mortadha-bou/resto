import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit  {
  platsTab :any = [];
   constructor(private platService:PlatService,
    private router:Router){}
   ngOnInit(){
    
    this.platsTab=[]
    this.platService.getAllPlats().subscribe(
      data=>{this.platsTab=data;
        console.log(this.platsTab)},
        error=>{}
    )

   }
   deletePlat(id:any){
    this.platService.deletePlat(id).subscribe();
    location.reload()

   }
   goToEdit(id:any){
    this.router.navigate([`editPlat/${id}`])
   }
  

   

}
