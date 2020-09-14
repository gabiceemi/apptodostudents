import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Habit from './Habit';

@Entity('habit_histories')
class HabitHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  day: Date;

  @Column()
  status: string;

  @Column()
  habit_id: string;

  @ManyToOne(() => Habit)
  @JoinColumn({ name: 'habit_id' })
  habit: Habit;
}

export default HabitHistory;
