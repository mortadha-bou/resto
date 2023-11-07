import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent {
  reservation:any= {};
  reservationId:any;
  reservationForm!: FormGroup;
  constructor(private activatedRouter : ActivatedRoute,private reservationService:ReservationService,
    private router:Router){}
    
  ngOnInit(){
    this.reservationId=this.activatedRouter.snapshot.paramMap.get('id');
    if(this.reservationId){
      this.reservationService.getReservationById(this.reservationId).subscribe((data)=>{this.reservation= data;});
    }
  }
  editReservation(){
    if(this.reservationId){
      console.log(this.reservation)
      this.reservationService.updateReservation(this.reservation).subscribe((data) => { console.log('Here reservation : ',data); },
      (err) => { console.log('edit reservation error : ',err); });
    }
    this.router.navigate([`reservationTable/`]);
    
  
}

}
