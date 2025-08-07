import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { University } from './university.entity';
import { AcademicDepartment } from './academic-department.entity';
import { Student } from './student.entity';

@Entity()
export class Campus {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campus_name: string;

  @Column({ type: 'int' })
  established_year: number;

  @ManyToOne(() => University, (university) => university.campuses)
  @JoinColumn({ name: 'university_id' })
  university: University;

  @OneToMany(() => AcademicDepartment, (department) => department.campus)
  departments: AcademicDepartment[];

  @OneToMany(() => Student, (student) => student.campus)
  students: Student[];
}
