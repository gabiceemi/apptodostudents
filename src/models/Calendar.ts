import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Category from './CalendarCategory';
import University from './University';

@Entity('calendars')
class Calendar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('timestamp with time zone')
  date_from: Date;

  @Column('timestamp with time zone')
  date_to: Date;

  @Column()
  favorites: string;

  @Column()
  campus_id: string;

  @ManyToOne(() => University)
  @JoinColumn({ name: 'campus_id' })
  campus: University;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
}

export default Calendar;
