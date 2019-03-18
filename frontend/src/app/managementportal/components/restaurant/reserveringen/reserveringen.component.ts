import { Component, OnInit } from '@angular/core';
import { TafelreserveringenService } from 'src/app/services/tafelreserveringen.service';
import { Observable } from 'rxjs';
import { Tafelreservering } from 'src/app/models/tafelreservering';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from 'src/app/shared/components/modal-confirm/modal-confirm.component';
import { FormTafelreserveringComponent } from 'src/app/shared/components/form-tafelreservering/form-tafelreservering.component';

@Component({
  selector: 'app-reserveringen',
  templateUrl: './reserveringen.component.html',
  styleUrls: ['./reserveringen.component.scss']
})
export class ReserveringenComponent implements OnInit {
  public reserveringen: Observable<Tafelreservering[] | undefined> = this.tafelreserveringenService.getAllReserveringen();

  constructor(
    private tafelreserveringenService: TafelreserveringenService,
    private modalService: NgbModal,
    ) {}

  ngOnInit() {
  }

  openFormTafelreserveringModal(reservering?: Tafelreservering) {
    const modal = this.modalService.open(FormTafelreserveringComponent);

    if (reservering) {
      modal.componentInstance.reservering = reservering;
    }

    modal.result
      .then(result => {
        this.tafelreserveringenService.addNewReservering(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  verwijderReservering(reservering: Tafelreservering) {
    this.modalService
      .open(ModalConfirmComponent)
      .result.then(result => {
        if (result === 'yes') {
          this.tafelreserveringenService.deleteReservering(reservering);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}