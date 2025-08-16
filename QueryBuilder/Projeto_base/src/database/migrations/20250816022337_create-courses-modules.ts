import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course-module", (table) => {
    table.increments("id").primary();
    table.text("name").notNullable();

    table
      .integer("course_id")
      .notNullable()
      .references("id")
      .inTable("courses");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("courses_modules");
}
