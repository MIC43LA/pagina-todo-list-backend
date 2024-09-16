'use strict';

const Tarea = use('App/Models/Tarea');

class TareaSeeder {
  async run () {
    await Tarea.createMany([
      { titulo: 'Comprar víveres', descripcion: 'Comprar alimentos y productos básicos para la semana.', completada: false },
      { titulo: 'Hacer ejercicio', descripcion: 'Ir al gimnasio y realizar una rutina de entrenamiento.', completada: true },
      { titulo: 'Leer un libro', descripcion: 'Leer el libro "Aprender JavaScript"', completada: false },
      { titulo: 'Estudiar AdonisJS', descripcion: 'Completar los tutoriales de AdonisJS.', completada: false },
      { titulo: 'Escribir un artículo', descripcion: 'Escribir un artículo sobre el desarrollo en Node.js.', completada: false },
      { titulo: 'Revisar correos electrónicos', descripcion: 'Revisar y responder correos electrónicos importantes.', completada: true },
      { titulo: 'Organizar reunión', descripcion: 'Organizar una reunión con el equipo de trabajo.', completada: false },
      { titulo: 'Comprar regalos', descripcion: 'Comprar regalos para el cumpleaños de un amigo.', completada: false },
      { titulo: 'Hacer limpieza', descripcion: 'Limpiar la casa y organizar los espacios.', completada: true },
      { titulo: 'Preparar presentación', descripcion: 'Preparar la presentación para la conferencia del próximo mes.', completada: false },
      { titulo: 'Actualizar CV', descripcion: 'Actualizar el currículum vitae con la experiencia más reciente.', completada: true },
      { titulo: 'Ver serie', descripcion: 'Ver el último episodio de la serie favorita.', completada: false },
      { titulo: 'Realizar prueba', descripcion: 'Realizar prueba de funcionalidad para la aplicación web.', completada: false },
      { titulo: 'Preparar cena', descripcion: 'Preparar la cena para la familia.', completada: true },
      { titulo: 'Revisar presupuesto', descripcion: 'Revisar y ajustar el presupuesto mensual.', completada: false },
      { titulo: 'Hacer respaldo', descripcion: 'Hacer una copia de seguridad de todos los datos importantes.', completada: true },
      { titulo: 'Investigar nuevos proyectos', descripcion: 'Investigar nuevas oportunidades y proyectos interesantes.', completada: false },
      { titulo: 'Visitar a un amigo', descripcion: 'Visitar a un amigo que hace tiempo no veo.', completada: false },
      { titulo: 'Preparar informes', descripcion: 'Preparar informes para la reunión de mañana.', completada: true },
      { titulo: 'Revisar proyecto', descripcion: 'Revisar el estado del proyecto y planificar los próximos pasos.', completada: false },
    ]);
  }
}

module.exports = TareaSeeder;
