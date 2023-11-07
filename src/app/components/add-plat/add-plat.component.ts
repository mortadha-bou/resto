import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent {
  plat:any= {};
  platForm!: FormGroup;
  constructor(private platService:PlatService,
    private router:Router){}
  addPlat(){
    console.log(this.plat)
    this.platService.addPlat(this.plat).subscribe();
    this.router.navigate([`menu/`]);
  }

}


