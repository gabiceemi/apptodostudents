import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Task from './Task';
import Habit from './Habit';
import Assignment from './Assignment';

@Entity('notifications')
class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  task_id: string;

  @ManyToOne(() => Task)
  @JoinColumn({ name: 'task_id' })
  task: Task;

  @Column()
  habit_id: string;

  @ManyToOne(() => Habit)
  @JoinColumn({ name: 'habit_id' })
  habit: Habit;

  @Column()
  assignment_id: string;

  @ManyToOne(() => Assignment)
  @JoinColumn({ name: 'assignment_id' })
  assignment: Assignment;
}

export default Notification;
