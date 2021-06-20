import {MigrationInterface, QueryRunner} from "typeorm";

export class userTest1624143345700 implements MigrationInterface {
    name = 'userTest1624143345700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "columns" DROP CONSTRAINT "columns_boardid_fkey"`);
        await queryRunner.query(`CREATE TABLE "boards" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "columnsId" uuid, CONSTRAINT "PK_606923b0b068ef262dfdcd18f44" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "columns" DROP CONSTRAINT "columns_id_key_key"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "id_key"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP CONSTRAINT "columns_boardid_key"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "boardid"`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "columns" ADD CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "order" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "boardId" uuid`);
        await queryRunner.query(`ALTER TABLE "columns" ADD CONSTRAINT "FK_ac92bfd7ba33174aabef610f361" FOREIGN KEY ("boardId") REFERENCES "boards"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "boards" ADD CONSTRAINT "FK_612ea326dafce48a83d617e6ab3" FOREIGN KEY ("columnsId") REFERENCES "columns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE VIEW "board_view" AS SELECT "boards"."id" AS "id", "boards"."title" AS "title", "boards"."columnsId" AS "columns" FROM "boards" "boards" LEFT JOIN "columns" "columns" ON "boards"."id" = "columns"."boardId" WHERE "columns"."boardId" = board.id`);
        await queryRunner.query(`INSERT INTO "typeorm_metadata"("type", "schema", "name", "value") VALUES ($1, $2, $3, $4)`, ["VIEW","public","board_view","SELECT \"boards\".\"id\" AS \"id\", \"boards\".\"title\" AS \"title\", \"boards\".\"columnsId\" AS \"columns\" FROM \"boards\" \"boards\" LEFT JOIN \"columns\" \"columns\" ON \"boards\".\"id\" = \"columns\".\"boardId\" WHERE \"columns\".\"boardId\" = board.id"]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "schema" = $2 AND "name" = $3`, ["VIEW","public","board_view"]);
        await queryRunner.query(`DROP VIEW "board_view"`);
        await queryRunner.query(`ALTER TABLE "boards" DROP CONSTRAINT "FK_612ea326dafce48a83d617e6ab3"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP CONSTRAINT "FK_ac92bfd7ba33174aabef610f361"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "boardId"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "order"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5"`);
        await queryRunner.query(`ALTER TABLE "columns" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "boardid" uuid`);
        await queryRunner.query(`ALTER TABLE "columns" ADD CONSTRAINT "columns_boardid_key" UNIQUE ("boardid")`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "order_id" integer`);
        await queryRunner.query(`ALTER TABLE "columns" ADD "id_key" uuid`);
        await queryRunner.query(`ALTER TABLE "columns" ADD CONSTRAINT "columns_id_key_key" UNIQUE ("id_key")`);
        await queryRunner.query(`DROP TABLE "boards"`);
        await queryRunner.query(`ALTER TABLE "columns" ADD CONSTRAINT "columns_boardid_fkey" FOREIGN KEY ("boardid") REFERENCES "board"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
