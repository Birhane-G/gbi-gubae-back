import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Region } from './region.entity';
import { Woreda } from './woreda.entity';

@Entity()
export class Zone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zone_name: string;

  @ManyToOne(() => Region, (region) => region.zones)
  @JoinColumn({ name: 'region_id' })
  region: Region;

  @OneToMany(() => Woreda, (woreda) => woreda.zone)
  woredas: Woreda[];
}
