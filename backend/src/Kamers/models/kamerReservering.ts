import {KamerReserveringEntity} from "./entities/kamerReserving.entity";

export class KamerReservering{
    constructor(
        public id: number,
        public voornaam: string,
        public achternaam: string,
        public telefoonnummer: string,
        public emailadres: string,
        public identiteitsid: string,
        public postcode: string,
        public straat: string,
        public huisnummer: string,
        public woonplaats: string,
        public land: string,
        public datumvan: string,
        public datumtot: string,
        public kamernaam: string,
        public inchecken: string,
        public uitchecken: string,
        public personen: number,
        public prijs: number,
        public reserveringsnummer: string
    ){}

    public static fromKamerReservering(kamerReserveringEntity: KamerReserveringEntity): KamerReservering {
        return new KamerReservering(kamerReserveringEntity.id,
            kamerReserveringEntity.voornaam,
            kamerReserveringEntity.achternaam,
            kamerReserveringEntity.telefoonnummer,
            kamerReserveringEntity.emailadres,
            kamerReserveringEntity.identiteitsid,
            kamerReserveringEntity.postcode,
            kamerReserveringEntity.straat,
            kamerReserveringEntity.huisnummer,
            kamerReserveringEntity.woonplaats,
            kamerReserveringEntity.land,
            kamerReserveringEntity.datumvan,
            kamerReserveringEntity.datumtot,
            kamerReserveringEntity.kamernaam,
            kamerReserveringEntity.inchecken,
            kamerReserveringEntity.uitchecken,
            kamerReserveringEntity.personen,
            kamerReserveringEntity.prijs,
            kamerReserveringEntity.reserveringsnummer);
    }
}
