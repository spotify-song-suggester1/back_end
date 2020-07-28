exports.up = function (knex) {
    return knex.schema.createTable("SongTable", (tbl) => {
      tbl.increments();
      tbl.string("title", 128).notNullable().unique().index();
      tbl.string("artist", 256).notNullable();
      tbl.string("genre", 256).notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("SongTable");
  };