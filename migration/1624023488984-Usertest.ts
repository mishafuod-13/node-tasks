import {MigrationInterface, QueryRunner} from "typeorm";

export class Usertest1624023488984 implements MigrationInterface {
    name = 'Usertest1624023488984'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" (
            ID VARCHAR(36) UNIQUE,
            NAME VARCHAR (30),
            LOGIN VARCHAR (30),
            PASSWORD VARCHAR (18)
        );`);
        await queryRunner.query(`ALTER TABLE "users" ADD "login" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "login"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "timestamp" bigint NOT NULL`);
        await queryRunner.query(`DROP TABLE "users"`); 
    }

}
