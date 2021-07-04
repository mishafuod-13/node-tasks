const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

export default {
  type: "postgres",
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  logging: true,
  entities: ["./src/resources/**/*.model{.ts,.js}"],
  subscribers : ["./src/resources/helpers/*.subscriber.ts"],
  migrationsTableName: "migration",
  migrations: ["./migration/*.ts"],
    cli: {
        entitiesDir: "./src/resources/**/*.model{.ts,.js}",
        subscribersDir:"./src/resources/helpers/*.subscriber.ts",
        migrationsDir: "./migration/"
    }
}