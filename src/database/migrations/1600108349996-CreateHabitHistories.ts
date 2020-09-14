import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateHabitHistories1600108349996
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'habit_histories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'day',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'habit_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'habit_histories',
      new TableForeignKey({
        name: 'HabitHistory',
        columnNames: ['habit_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'habits',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('habit_histories', 'HabitHistory');

    await queryRunner.dropTable('habit_histories');
  }
}
