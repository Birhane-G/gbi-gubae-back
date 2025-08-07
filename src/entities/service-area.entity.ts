import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentService } from './student-service.entity';

@Entity()
export class ServiceArea {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  area_name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => StudentService, (ss) => ss.serviceArea)
  studentServices: StudentService[];
}
