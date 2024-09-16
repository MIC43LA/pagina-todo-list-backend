const Schema = use('Schema');

class TareaSchema extends Schema {
  up () {
    this.create('tareas', (table) => {
      table.increments();
      table.string('titulo').notNullable();
      table.text('descripcion');
      table.boolean('completada').defaultTo(false);
      table.timestamps();
    });
  }

  down () {
    this.drop('tareas');
  }
}

module.exports = TareaSchema;
