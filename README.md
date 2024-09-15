
## Resumen de la API REST

### Base URL
La API expone los siguientes endpoints bajo el prefijo `/api/v1`. Ejemplo de la URL base:
```
http://localhost:3333/api/v1
```

### Endpoints

1. **Obtener todas las tareas**
   - **Endpoint:** `GET /tareas`
   - **Descripción:** Obtiene una lista de todas las tareas.
   - **Ejemplo de Respuesta:**
     ```json
     [
       {
         "id": 1,
         "titulo": "Comprar víveres",
         "descripcion": "Comprar alimentos y productos básicos para la semana.",
         "completada": false,
         "created_at": "2024-09-15T12:34:56.000Z",
         "updated_at": "2024-09-15T12:34:56.000Z"
       },
       ...
     ]
     ```

2. **Crear una nueva tarea**
   - **Endpoint:** `POST /tareas`
   - **Descripción:** Crea una nueva tarea.
   - **Ejemplo de Cuerpo de Solicitud:**
     ```json
     {
       "titulo": "Aprender React",
       "descripcion": "Completar el tutorial de React."
     }
     ```
   - **Ejemplo de Respuesta:**
     ```json
     {
       "id": 2,
       "titulo": "Aprender React",
       "descripcion": "Completar el tutorial de React.",
       "completada": false,
       "created_at": "2024-09-15T12:34:56.000Z",
       "updated_at": "2024-09-15T12:34:56.000Z"
     }
     ```

3. **Obtener una tarea específica**
   - **Endpoint:** `GET /tareas/:id`
   - **Descripción:** Obtiene los detalles de una tarea específica por su ID.
   - **Ejemplo de Respuesta:**
     ```json
     {
       "id": 1,
       "titulo": "Comprar víveres",
       "descripcion": "Comprar alimentos y productos básicos para la semana.",
       "completada": false,
       "created_at": "2024-09-15T12:34:56.000Z",
       "updated_at": "2024-09-15T12:34:56.000Z"
     }
     ```

4. **Actualizar una tarea existente**
   - **Endpoint:** `PUT /tareas/:id`
   - **Descripción:** Actualiza los detalles de una tarea específica.
   - **Ejemplo de Cuerpo de Solicitud:**
     ```json
     {
       "titulo": "Comprar víveres actualizados",
       "descripcion": "Comprar alimentos para la semana y productos de limpieza.",
       "completada": true
     }
     ```
   - **Ejemplo de Respuesta:**
     ```json
     {
       "id": 1,
       "titulo": "Comprar víveres actualizados",
       "descripcion": "Comprar alimentos para la semana y productos de limpieza.",
       "completada": true,
       "created_at": "2024-09-15T12:34:56.000Z",
       "updated_at": "2024-09-15T13:00:00.000Z"
     }
     ```

5. **Eliminar una tarea**
   - **Endpoint:** `DELETE /tareas/:id`
   - **Descripción:** Elimina una tarea específica.
   - **Ejemplo de Respuesta:** Código de estado HTTP `204 No Content` (sin contenido en el cuerpo de la respuesta).

## Ejemplos de Consultas con `fetch` en JavaScript

### 1. Obtener todas las tareas
```javascript
fetch('http://localhost:3333/api/v1/tareas')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 2. Crear una nueva tarea
```javascript
fetch('http://localhost:3333/api/v1/tareas', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titulo: 'Aprender React',
    descripcion: 'Completar el tutorial de React.'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 3. Obtener una tarea específica
```javascript
fetch('http://localhost:3333/api/v1/tareas/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 4. Actualizar una tarea existente
```javascript
fetch('http://localhost:3333/api/v1/tareas/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titulo: 'Comprar víveres actualizados',
    descripcion: 'Comprar alimentos para la semana y productos de limpieza.',
    completada: true
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 5. Eliminar una tarea
```javascript
fetch('http://localhost:3333/api/v1/tareas/1', {
  method: 'DELETE'
})
  .then(() => console.log('Tarea eliminada'))
  .catch(error => console.error('Error:', error));
```

