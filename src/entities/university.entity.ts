import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Campus } from './campus.entity';
import { Student } from './student.entity';

@Entity()
export class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  university_name: string;

  @Column({ type: 'int' })
  established_year: number;

  @OneToMany(() => Campus, (campus) => campus.university)
  campuses: Campus[];

  @OneToMany(() => Student, (student) => student.university)
  students: Student[];
}
