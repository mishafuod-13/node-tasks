const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

module.exports =  {
  type: "postgres",
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  logging: true,
  synchronize: true,
  entities: ["./src/**/entities/*.entity"],
  subscribers : ["./src/**/subscribers/*.subscriber"],
  migrations: ["./migration/*.ts"],
}