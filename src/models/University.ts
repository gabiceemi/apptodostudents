import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('university')
class University {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campus: string;
}

export default University;
