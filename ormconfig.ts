const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST
} = process.env;

export default {
  type: "postgres",
  port: POSTGRES_PORT,
  host: POSTGRES_HOST,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
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