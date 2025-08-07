import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Woreda } from './woreda.entity';
import { SundaySchoolService } from './sunday-school-service.entity';

@Entity()
export class SundaySchool {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  church_name: string;

  @Column()
  specific_address: string;

  @ManyToOne(() => Woreda, (woreda) => woreda.sundaySchools)
  @JoinColumn({ name: 'woreda_id' })
  woreda: Woreda;

  @OneToMany(() => SundaySchoolService, (service) => service.sundaySchool)
  services: SundaySchoolService[];
}
