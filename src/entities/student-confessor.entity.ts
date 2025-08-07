// src/entities/student-confessor.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { Student } from './student.entity';
import { Confessor } from './confessor.entity';

@Entity()
export class StudentConfessor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Confessor)
  @JoinColumn({ name: 'confessor_id' })
  confessor: Confessor;

  @Column({ type: 'int' })
  confession_start_year: number;

  @Column({ type: 'int', nullable: true })
  confession_end_year: number;

  @Column({ default: false })
  is_current_confessor: boolean;
}
