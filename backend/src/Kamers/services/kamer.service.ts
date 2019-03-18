import { Injectable } from '@nestjs/common';
import { CreateKamerDto } from 'src/Kamers/dto/create-kamer-dto';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Kamer } from '../models/kamer';
import { KamerEntity } from '../models/entities/kamer.entity';
import {UpdateKamerDto} from "../dto/update-kamer-dto";

@Injectable()
export class KamerService {
    constructor(@InjectRepository(KamerEntity) private readonly kamersepository: Repository<KamerEntity>,) {}

    public getKamers(): Promise<Kamer[]>{
        return this.kamersepository.find()
        .then(kamersEntities => kamersEntities.map(kamerEntity => kamerEntity.mapToKamers()));
    }

    
    public getKamersofType(roomType: string): Promise<Kamer[]>{
        return this.kamersepository.find({where: {kamerType: roomType}})
        .then(kamersEntities => kamersEntities.map(kamerEntity => kamerEntity.mapToKamers()));
    }
    
    public async searchFreeRooms(datumvan: string, datumtot: string, kamertype: string): Promise<Kamer[]>{
        return await getRepository(KamerEntity)
            .createQueryBuilder("kamer")
            .where(`kamer.kamerNaam NOT IN (select kamernaam from kamer_reservering_entity where datumvan >= '${datumvan}' 
                    AND datumtot <= '${datumtot}') AND kamer.kamerType='${kamertype}'`)
            .getMany()
            .then(kamersEntities => kamersEntities.map(kamerEntity => kamerEntity.mapToKamers()));
    }

    public saveKamer(createkamerdto: CreateKamerDto) {
        this.kamersepository.save(createkamerdto.kamerEntity());
     }
     public updateKamer(updateKamerDto: UpdateKamerDto) {
        this.kamersepository.update({kamerNaam: updateKamerDto.kamerNaam}, { kamerType: updateKamerDto.kamerType,
            kamerLigging: updateKamerDto.kamerLigging, aantalPersonen: updateKamerDto.aantalPersonen, prijs: updateKamerDto.prijs });
     }
     public deleteKamer(kamernaam: string){
         this.kamersepository.delete({kamerNaam: kamernaam});
     }
}
