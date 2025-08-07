import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Zone } from './zone.entity';
import { Student } from './student.entity';
import { SundaySchool } from './sunday-school.entity';

@Entity()
export class Woreda {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  woreda_name: string;

  @Column({ type: 'int' })
  established_year: number;

  @ManyToOne(() => Zone, (zone) => zone.woredas)
  @JoinColumn({ name: 'zone_id' })
  zone: Zone;

  @OneToMany(() => Student, (student) => student.birth_woreda)
  students: Student[];

  @OneToMany(() => SundaySchool, (ss) => ss.woreda)
  sundaySchools: SundaySchool[];
}
