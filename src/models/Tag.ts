import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
}

export default Tag;
