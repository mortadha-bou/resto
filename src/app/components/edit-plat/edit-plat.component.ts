import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent {
  plat:any= {};
  platId:any;
  chefForm!: FormGroup;
  constructor(private activatedRouter : ActivatedRoute,private platService:PlatService,
    private router:Router){}
    
  ngOnInit(){
    this.platId=this.activatedRouter.snapshot.paramMap.get('id');
    if(this.platId){
      this.platService.getPlatById(this.platId).subscribe((data)=>{this.plat= data;});
    }
  }
  editPlat(){
    if(this.platId){
      console.log(this.plat)
      this.platService.updatePlat(this.plat).subscribe((data) => { console.log('Here plat : ',data); },
      (err) => { console.log('edit plat error : ',err); });
    }else
    {
      this.platService.addPlat(this.plat).subscribe( (data) => { console.log('Here plat  : ',data); },
      (err) => { console.log('add plat error : ',err); } );

    }
    this.router.navigate([`menu/`]);
    
  
}


}
