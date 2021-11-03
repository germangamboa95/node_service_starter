import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  console.log("Migration ran");
}

export async function down(knex: Knex): Promise<void> {}
