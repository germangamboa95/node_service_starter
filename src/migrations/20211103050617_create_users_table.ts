import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.raw("SET SESSION sql_require_primary_key=0");

  await knex.schema.createTable("users", (table) => {
    table.primary;
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("password");
    table.string("email").unique();
    table.timestamp("deleted_at");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users");
}
