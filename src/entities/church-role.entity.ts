import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Student } from './student.entity';

@Entity('church_roles')
export class ChurchRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_name: string;

  @OneToMany(() => Student, (student) => student.currentChurchRole)
  students: Student[];
}
