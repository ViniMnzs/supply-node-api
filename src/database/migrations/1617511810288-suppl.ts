import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class supply1617479503337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
                name: 'supply',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'liters',
                        type: 'decimal',
                    },
                    {
                        name: 'plate',
                        type: 'varchar',
                    },
                    {
                        name: 'value',
                        type: 'decimal'
                    },
                    {
                        name: 'driver',
                        type: 'varchar'
                    },
                    {
                        name: 'distance',
                        type: 'decimal'
                    },
                    {
                        name: 'price',
                        type: 'decimal'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'type',
                        type: 'varchar'
                    },
                ]
            }
        ))}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('supply');
    }

}
