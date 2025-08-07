import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from './student.entity';
import { SundaySchool } from './sunday-school.entity';

@Entity()
export class SundaySchoolService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => SundaySchool)
  @JoinColumn({ name: 'sunday_school_id' })
  sundaySchool: SundaySchool;

  @Column()
  class_served_in: string;

  @Column({ type: 'int' })
  service_start_year: number;

  @Column({ type: 'int', nullable: true })
  service_end_year: number;

  @Column({ default: false })
  is_currently_serving: boolean;
}
