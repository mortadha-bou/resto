import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
 @Input() x:any;
 constructor(private chefService:ChefService,
  private router:Router){}
 ngOnInit(){
  
 }


}
