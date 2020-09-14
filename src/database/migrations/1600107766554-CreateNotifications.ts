import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateNotifications1600107766554
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'notifications',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'task_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'habit_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'assignment_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'notifications',
      new TableForeignKey({
        name: 'NotificationTask',
        columnNames: ['task_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tasks',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'notifications',
      new TableForeignKey({
        name: 'NotificationHabit',
        columnNames: ['habit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'habits',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'notifications',
      new TableForeignKey({
        name: 'NotificationAssignment',
        columnNames: ['assignment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'assignments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('notifications', 'NotificationTask');
    await queryRunner.dropForeignKey('notifications', 'NotificationHabit');
    await queryRunner.dropForeignKey('notifications', 'NotificationAssignment');

    await queryRunner.dropTable('notifications');
  }
}
