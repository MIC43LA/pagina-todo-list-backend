'use strict';

const Tarea = use('App/Models/Tarea');

class TareaController {
  async index ({ response }) {
    const tareas = await Tarea.all();
    return response.json(tareas);
  }

  async store ({ request, response }) {
    const { titulo, descripcion } = request.all();
    const tarea = await Tarea.create({ titulo, descripcion });
    return response.status(201).json(tarea);
  }

  async show ({ params, response }) {
    const tarea = await Tarea.find(params.id);
    return response.json(tarea);
  }

  async update ({ params, request, response }) {
    const tarea = await Tarea.find(params.id);
    tarea.merge(request.only(['titulo', 'descripcion', 'completada']));
    await tarea.save();
    return response.json(tarea);
  }

  async destroy ({ params, response }) {
    const tarea = await Tarea.find(params.id);
    await tarea.delete();
    return response.status(204).send();
  }
}

module.exports = TareaController;
