import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coordinators')
class Coordinator {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  avatar: string;
}

export default Coordinator;
