import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservation:any={};
  reservationForm!:FormGroup;
  constructor(private reservationService:ReservationService,
    private router:Router){}
  addReservation(){
    console.log(this.reservation)
    this.reservationService.addReservation(this.reservation).subscribe();
    this.router.navigate([`home/`]);

  }

}
