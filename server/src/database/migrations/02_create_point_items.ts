import { Knex } from 'knex';

// CRIAR TABELA
export async function up(knex: Knex) {
    knex.schema.createTable('point_items', table => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.string('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

// VOLTAR ATRAS (DELETAR TABELA)
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}