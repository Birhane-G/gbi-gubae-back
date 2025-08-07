import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { University } from './university.entity';
import { Campus } from './campus.entity';
import { AcademicDepartment } from './academic-department.entity';
import { Woreda } from './woreda.entity';
import { ChurchRole } from './church-role.entity';
import { Account } from './account.entity';
import { ChurchFamilyNumber } from './church-family-number.entity';
import { Priesthood } from './priesthood.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  student_id: string;

  @OneToOne(() => Account, (account) => account.student, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  account: Account;

  @Column()
  first_name: string;

  @Column()
  father_name: string;

  @Column()
  grandfather_name: string;

  @Column()
  mother_name: string;

  @Column()
  gender: string;

  @Column()
  baptism_name: string;

  @Column({ type: 'date' })
  date_of_birth: Date;

  @ManyToOne(() => Woreda)
  @JoinColumn({ name: 'birth_woreda_id' })
  birth_woreda: Woreda;

  @Column()
  current_dorm: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  family_contact_name: string;

  @Column()
  family_contact_phone: string;

  @Column()
  emergency_contact_name: string;

  @Column()
  emergency_contact_phone: string;

  @ManyToOne(() => University)
  @JoinColumn({ name: 'university_id' })
  university: University;

  @ManyToOne(() => Campus)
  @JoinColumn({ name: 'campus_id' })
  campus: Campus;

  @ManyToOne(() => AcademicDepartment)
  @JoinColumn({ name: 'academic_department_id' })
  academic_department: AcademicDepartment;

  @Column()
  student_id_number: string;

  @Column()
  current_year_of_study: number;

  @Column()
  is_current_student: boolean;

  @Column({ nullable: true })
  graduated_year: number;

  @ManyToOne(() => ChurchRole, { nullable: true })
  @JoinColumn({ name: 'current_church_role_id' })
  currentChurchRole: ChurchRole;

  @Column({ nullable: true })
  profile_image_url: string;

  @Column({ type: 'date' })
  registered_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  last_updated_at: Date;

  @OneToMany(() => ChurchFamilyNumber, (familyNumber) => familyNumber.student)
  churchFamilyNumbers: ChurchFamilyNumber[];

  @OneToMany(() => Priesthood, (priesthood) => priesthood.student)
  priesthoods: Priesthood[];
}
