import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Assignment from './Assignment';

@Entity('assignment_informations')
class AssignmentInformation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  assignment_id: string;

  @ManyToOne(() => Assignment)
  @JoinColumn({ name: 'assignment_id' })
  assignment: Assignment;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default AssignmentInformation;
