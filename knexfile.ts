// Update with your config settings.

const migrations = {
  tableName: "knex_migrations",
  directory: "./src/migrations",
};

module.exports = {
  development: {
    client: "mysql2",
    connection: process.env.DATABASE_URL,

    migrations,
  },

  staging: {
    client: "mysql2",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations,
  },

  production: {
    client: "mysql2",
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10,
    },
    migrations,
  },
};
