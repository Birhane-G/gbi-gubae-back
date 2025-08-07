import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from './student.entity';

@Entity('priesthood')
export class Priesthood {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.priesthoods, {
    nullable: false,
  })
  student: Student;

  @Column()
  priesthood_type: string;

  @Column({ type: 'date' })
  ordination_date: Date;
}
