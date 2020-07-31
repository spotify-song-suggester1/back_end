exports.seed = function(knex) {
    return knex('genres')
      .truncate()
      .then(function() {
        return knex('genres').insert([
          {
            name:"rap"
          },
          {
            name:"rock"
          },
          {
            name:"country"
          },
          {
            name:"pop"
          },
        ]);
      });
  };
  