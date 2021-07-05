const { POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, } = process.env;
console.log(POSTGRES_PORT);
module.exports = {
    type: "postgres",
    port: POSTGRES_PORT,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    logging: true,
    synchronize: true,
    entities: ["./src/**/entities/*.entity"],
    subscribers: ["./src/resources/helpers/*.subscriber.ts"],
    migrations: ["./migration/*.ts"],
    cli: {
        entitiesDir: "./src/resources/**/*.model{.ts,.js}",
        subscribersDir: "./src/resources/helpers/*.subscriber.ts",
        migrationsDir: "./migration/"
    }
};
//# sourceMappingURL=ormconfig.js.map