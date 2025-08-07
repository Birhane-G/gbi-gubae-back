import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StudentTraining } from './student-training.entity';

@Entity()
export class Training {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  training_name: string;

  @Column()
  training_category: string;

  @Column({ type: 'int' })
  starting_year: number;

  @Column({ type: 'int' })
  end_year: number;

  @OneToMany(() => StudentTraining, (st) => st.training)
  studentTrainings: StudentTraining[];
}
