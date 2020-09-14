import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Class from './Class';

@Entity('class_schedules')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  classroom: string;

  @Column()
  date_from: string;

  @Column()
  date_to: string;

  @Column()
  class_id: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
