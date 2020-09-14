import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateProjects1600056706393 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'start_period',
            type: 'timestamp with time zone',
          },
          {
            name: 'final_period',
            type: 'timestamp with time zone',
          },
          {
            name: 'coordinator_id',
            type: 'uuid',
          },
          {
            name: 'campus_id',
            type: 'uuid',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'projects',
      new TableForeignKey({
        name: 'ProjectCoordinator',
        columnNames: ['coordinator_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'coordinators',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'projects',
      new TableForeignKey({
        name: 'ProjectUniversity',
        columnNames: ['campus_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'university',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'projects',
      new TableForeignKey({
        name: 'ProjectCategory',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'project_categories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('projects', 'ProjectCoordinator');
    await queryRunner.dropForeignKey('projects', 'ProjectUniversity');
    await queryRunner.dropForeignKey('projects', 'ProjectCategory');

    await queryRunner.dropTable('projects');
  }
}
