import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentConfessor } from './student-confessor.entity';

@Entity()
export class Confessor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @Column()
  title: string;

  @Column()
  church_name: string;

  @OneToMany(() => StudentConfessor, (sc) => sc.confessor)
  studentConfessors: StudentConfessor[];
}
