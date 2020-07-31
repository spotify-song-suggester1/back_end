exports.up = function (knex) {
    return knex.schema.createTable("genres", (tbl) => {
      tbl.increments();
      tbl.string("name", 256).notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("genres");
  };