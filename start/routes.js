'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.group(() => {
  Route.get('tareas', 'TareaController.index');
  Route.post('tareas', 'TareaController.store');
  Route.get('tareas/:id', 'TareaController.show');
  Route.put('tareas/:id', 'TareaController.update');
  Route.delete('tareas/:id', 'TareaController.destroy');
}).prefix('api/v1');
