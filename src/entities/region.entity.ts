import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Zone } from './zone.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  region_name: string;

  @Column({ type: 'int' })
  established_year: number;

  @OneToMany(() => Zone, (zone) => zone.region)
  zones: Zone[];
}
