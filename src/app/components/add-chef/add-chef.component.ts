import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent {
  chef:any= {};
  chefForm!: FormGroup;
  constructor(private chefService:ChefService,
    private router:Router){}
  addChef(){
this.chefService.addChef(this.chef).subscribe();
this.router.navigate([`chefs/`]);
  }

}
