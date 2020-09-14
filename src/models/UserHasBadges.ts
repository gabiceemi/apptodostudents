import {
  Entity,
  Column,
  ManyToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Badge from './Badge';
import User from './User';

@Entity('user_has_badges')
class UserHasBadges {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToMany(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  badge_id: string;

  @ManyToMany(() => Badge)
  @JoinColumn({ name: 'badge_id' })
  badge: Badge;
}

export default UserHasBadges;
