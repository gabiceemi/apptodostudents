import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project_categories')
class ProjectCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

export default ProjectCategory;
