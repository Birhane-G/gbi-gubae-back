import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentInstrument } from './student-instrument.entity';

@Entity()
export class Instrument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  instrument_name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => StudentInstrument, (si) => si.instrument)
  studentInstruments: StudentInstrument[];
}
