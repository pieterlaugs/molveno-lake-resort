import { Component, OnInit, Input } from '@angular/core';
import { GastKamerReservering } from '../../models/gast-kamerreservering';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { GastKamerReserveringFormGroup } from './gast-kamerreserveringformgroup';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/rooms.service';

import { Kamer } from 'src/app/models/kamer'
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-gast-kamerreservering',
  templateUrl: './gast-kamerreservering.component.html',
  styleUrls: ['./gast-kamerreservering.component.scss']
})
export class GastKamerReserveringComponent implements OnInit {
  public kamertype: string = '';
  // public capacity: number | undefined = undefined;
  //public kamers: any;
  public roomsOfTwo: any;
  public roomsOfThree: any;
  public roomsOfFour: any;
  refreshCache: boolean = true;

  gastkamerreservering: GastKamerReservering | undefined = undefined;
  submitted = false;
  public kamerreserveringForm = new GastKamerReserveringFormGroup();

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,  private modalService: NgbModal, private roomservice: RoomService,) {}

  showRoomsByCapacity(capacity: number){
    return this.roomservice.searchRoomByCapacity(this.refreshCache, capacity)
  }

  showRoomsByDateAndCapacity(datumvan: string, datumtot: string, capacity: number){
    return this.roomservice.searchRoomByDateAndCapacity(this.refreshCache, datumvan, datumtot, capacity)
  }

  ngOnInit() {

    this.roomsOfTwo = this.showRoomsByCapacity(2);
    this.roomsOfThree = this.showRoomsByCapacity(3);
    this.roomsOfFour = this.showRoomsByCapacity(4);


    if (this.gastkamerreservering) {
      this.kamerreserveringForm.setValue({
        voornaam: this.gastkamerreservering.voornaam,
        achternaam: this.gastkamerreservering.achternaam,
        telefoonnummer: this.gastkamerreservering.telefoonnummer,
        emailadres: this.gastkamerreservering.emailadres,
        identiteitsid: this.gastkamerreservering.identiteitsid,
        postcode: this.gastkamerreservering.postcode,
        straat: this.gastkamerreservering.straat,
        huisnummer: this.gastkamerreservering.huisnummer,
        woonplaats: this.gastkamerreservering.woonplaats,
        land: this.gastkamerreservering.land,
        datumvan: this.gastkamerreservering.datumvan,
        datumtot: this.gastkamerreservering.datumtot,
        kamernaam: this.gastkamerreservering.kamernaam
      });
    }
  }

  submitForm() {
    this.activeModal.close(new GastKamerReservering(
      this.kamerreserveringForm.value.id,
      this.kamerreserveringForm.value.voornaam,
      this.kamerreserveringForm.value.achternaam,
      this.kamerreserveringForm.value.telefoonnummer,
      this.kamerreserveringForm.value.emailadres,
      this.kamerreserveringForm.value.identiteitsid,
      this.kamerreserveringForm.value.postcode,
      this.kamerreserveringForm.value.straat,
      this.kamerreserveringForm.value.huisnummer,
      this.kamerreserveringForm.value.woonplaats,
      this.kamerreserveringForm.value.land,
      this.kamerreserveringForm.value.datumvan,
      this.kamerreserveringForm.value.datumtot,
      this.kamerreserveringForm.value.kamernaam,
    ));
    location.reload();
  }

}
