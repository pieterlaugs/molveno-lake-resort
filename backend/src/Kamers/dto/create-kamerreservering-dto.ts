import { KamerReserveringEntity } from '../models/entities/kamerReserving.entity';
import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateKamerreserveringDto {
  @IsString()
  @ApiModelProperty()
  public readonly voornaam: string;

  @IsString()
  @ApiModelProperty()
  public readonly achternaam: string;

  @IsString()
  @ApiModelProperty()
  public readonly telefoonnummer: string;

  @IsString()
  @ApiModelProperty()
  public readonly emailadres: string;

//@IsString()
  @ApiModelProperty()
  public readonly identiteitsid: string;

  @IsString()
  @ApiModelProperty()
  public readonly postcode: string;

  @IsString()
  @ApiModelProperty()
  public readonly straat: string;

  @IsString()
  @ApiModelProperty()
  public readonly huisnummer: string;

  @IsString()
  @ApiModelProperty()
  public readonly woonplaats: string;

  @IsString()
  @ApiModelProperty()
  public readonly land: string;

  @IsString()
  @ApiModelProperty()
  public readonly datumvan: string;

  @IsString()
  @ApiModelProperty()
  public readonly datumtot: string;

  @IsString()
  @ApiModelProperty()
  public readonly kamernaam: string;

  //@IsString()
  @ApiModelProperty()
  public readonly inchecken: string;

  //@IsString()
  @ApiModelProperty()
  public readonly uitchecken: string;

  //@IsNumber()
  @ApiModelProperty()
  public readonly personen: number;

  //@IsNumber()
  @ApiModelProperty()
  public readonly prijs: number;

  //@IsString()
  @ApiModelProperty()
  public readonly reserveringsnummer: string;

  kamerReserveringEntity() {
    return new KamerReserveringEntity(
        this.voornaam,
        this.achternaam,
        this.telefoonnummer,
        this.emailadres,
        this.identiteitsid,
        this.postcode,
        this.straat,
        this.huisnummer,
        this.woonplaats,
        this.land,
        this.datumvan,
        this.datumtot,
        this.kamernaam,
        this.inchecken,
        this.uitchecken,
        this.personen,
        this.prijs,
        this.reserveringsnummer,
    );
  }
}
