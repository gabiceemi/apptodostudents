import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateCalendars1600058227775
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'calendars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'date_from',
            type: 'timestamp with time zone',
          },
          {
            name: 'date_to',
            type: 'timestamp with time zone',
          },
          {
            name: 'favorites',
            type: 'varchar',
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
      'calendars',
      new TableForeignKey({
        name: 'CalendarUniversity',
        columnNames: ['campus_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'university',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'calendars',
      new TableForeignKey({
        name: 'CalendarCategory',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'calendar_categories',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('calendars', 'CalendarUniversity');
    await queryRunner.dropForeignKey('calendars', 'CalendarCategory');

    await queryRunner.dropTable('calendars');
  }
}
