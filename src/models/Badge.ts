import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('badges')
class Badge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  level: string;

  @Column()
  requirement: string;
}

export default Badge;
