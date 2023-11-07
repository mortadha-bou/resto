import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.css']
})
export class ReservationTableComponent {
  reservationTab :any = [];
  constructor( private reservationService:ReservationService,
    private router:Router
      
    ){}
  ngOnInit():void{
    //this.getAllMatches()
    this.reservationService.getAllReservation().subscribe(
      data=>{this.reservationTab=data;
        console.log(this.reservationTab)},
        error=>{}
    );

  }
 /* getAllMatches(){
    this.matchesTab=JSON.parse(localStorage.getItem("matches")||'[]')
 }
 */
deleteReservation(id:any){
  this.reservationService.deleteReservationById(id).subscribe();
 
}

goToEdit(id:any){
  this.router.navigate([`editReservation/${id}`])

}

}
