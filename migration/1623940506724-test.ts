import {MigrationInterface, QueryRunner} from "typeorm";

export class test1623940506724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`CREATE TABLE "USERS" (
                ID UUID UNIQUE,
                NAME VARCHAR (30),
                LOGIN VARCHAR (30),
                PASSWORD VARCHAR (18)
            );`);
    
           /* await queryRunner.query(`CREATE TABLE "COLUMNS" (
                ID UUID UNIQUE,
                TITLE VARCHAR (30),
                ORDER integer
            )`);
    
            await queryRunner.query(`CREATE TABLE "BOARDS" (
                ID UUID UNIQUE,
                TITLE VARCHAR (30),
                COLUMNS UUID[],
                FOREIGN KEY (COLUMNS) REFERNSES COLUMNS (ID)
            )`);
    
            await queryRunner.query(`CREATE TABLE "TASKS" (
                ID UUID UNIQUE,
                TITLE VARCHAR (30),
                ORDER INTEGER,
                DESCRIPTION VARCHAR (60),
                USERID UUID,
                FOREIGN KEY (USERID) REFERNSES USERS (ID),
                BOARDID (UUID),
                FOREIGN KEY (BOARDID) REFERNSES BOARDS (ID),
                COLUMNID (UUID),
                FOREIGN KEY (COLUMNID) REFERNSES COLUMNS (ID)
            )`);
         */
        }  

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE USERS,
            DROP TABLE COLUMNS,
            DROP TABLE BOARDS,
            DROP TABLE TASKS
        `); 
    }

}
