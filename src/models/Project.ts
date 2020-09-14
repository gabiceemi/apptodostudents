import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Category from './ProjectCategory';
import Coordinator from './Coordinator';
import University from './University';

@Entity('projects')
class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  coordinator_id: string;

  @ManyToOne(() => Coordinator)
  @JoinColumn({ name: 'coordinator_id' })
  coordinator: Coordinator;

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

  @Column('timestamp with time zone')
  start_period: Date;

  @Column('timestamp with time zone')
  final_period: Date;
}

export default Project;
