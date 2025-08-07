import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from './student.entity';

@Entity('church_family_numbers')
export class ChurchFamilyNumber {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.churchFamilyNumbers, {
    nullable: false,
  })
  student: Student;

  @Column()
  family_number: string;

  @Column()
  family_name: string;

  @Column({ default: false })
  is_father: boolean;

  @Column({ default: false })
  is_mother: boolean;
}
