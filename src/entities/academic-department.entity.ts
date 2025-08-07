import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Campus } from './campus.entity';
import { Student } from './student.entity';

@Entity()
export class AcademicDepartment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  department_name: string;

  @ManyToOne(() => Campus, (campus) => campus.departments)
  @JoinColumn({ name: 'campus_id' })
  campus: Campus;

  @OneToMany(() => Student, (student) => student.academic_department)
  students: Student[];
}
