// DO NOT CHANGE THIS FILE
exports.up = function(knex) {
    return knex.schema.createTable("words", function(words) {
        words.increments();

        words.string("name", 128).notNullable();
        words.text("description").notNullable();
        words.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("words");
};
