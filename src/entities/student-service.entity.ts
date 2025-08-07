import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from './student.entity';
import { ServiceArea } from './service-area.entity';

@Entity()
export class StudentService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => ServiceArea)
  @JoinColumn({ name: 'service_area_id' })
  serviceArea: ServiceArea;

  @Column({ type: 'int' })
  service_start_year: number;

  @Column({ type: 'int', nullable: true })
  service_end_year: number;

  @Column({ default: false })
  is_currently_serving: boolean;
}
