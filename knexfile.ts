// Update with your config settings.

const migrations = {
  tableName: "knex_migrations",
  directory: "./src/migrations",
};

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE ?? process.env.DATABASE_URL,
    migrations,
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE ?? process.env.DATABASE_URL,
    searchPath: ["main_schema"],
    pool: {
      min: 2,
      max: 10,
    },
    migrations,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE ?? process.env.DATABASE_URL,
    searchPath: ["main_schema"],
    pool: {
      min: 2,
      max: 10,
    },
    migrations,
  },
};
