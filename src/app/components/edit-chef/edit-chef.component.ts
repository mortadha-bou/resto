import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {
  chef:any= {};
  chefId:any;
  chefForm!: FormGroup;
  constructor(private activatedRouter : ActivatedRoute,private chefService:ChefService,
    private router:Router){}
    
  ngOnInit(){
    
    this.chefId=this.activatedRouter.snapshot.paramMap.get('id');
    if(this.chefId){
      this.chefService.getChefById(this.chefId).subscribe((data)=>{this.chef= data;});
    }
  }

  editChef(){
    if(this.chefId){
      console.log(this.chef)
      this.chefService.updateChef(this.chef).subscribe((data) => { console.log('Here chef : ',data); },
      (err) => { console.log('edit chef error : ',err); });
    }else
    {
      this.chefService.addChef(this.chef).subscribe( (data) => { console.log('Here chef  : ',data); },
      (err) => { console.log('add chef error : ',err); } );

    }
    this.router.navigate([`chefs/`]);
    
  }
}
