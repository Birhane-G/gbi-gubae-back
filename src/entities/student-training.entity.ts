import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from './student.entity';
import { Training } from './training.entity';

@Entity()
export class StudentTraining {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => Training)
  @JoinColumn({ name: 'training_id' })
  training: Training;

  @Column()
  training_name: string;

  @Column({ nullable: true })
  specific_details: string;

  @Column({ type: 'int' })
  training_year: number;
}
