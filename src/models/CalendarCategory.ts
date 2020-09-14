import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('calendar_categories')
class CalendarCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default CalendarCategory;
