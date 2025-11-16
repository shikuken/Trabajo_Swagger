import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Documentation',
      version: '1.0.0',
      description: 'API REST para gestión de proyectos, tareas y personas',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo',
      },
    ],
    tags: [
      {
        name: 'People',
        description: 'Endpoints para gestión de personas',
      },
      {
        name: 'Projects',
        description: 'Endpoints para gestión de proyectos',
      },
      {
        name: 'Tasks',
        description: 'Endpoints para gestión de tareas',
      },
    ],
    components: {
      schemas: {
        Person: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID único de la persona',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Nombre de la persona',
              example: 'Juan Pérez',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Correo electrónico de la persona',
              example: 'juan@example.com',
            },
            role: {
              type: 'string',
              description: 'Rol de la persona',
              example: 'Desarrollador',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación',
            },
          },
          required: ['name'],
        },
        Project: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID único del proyecto',
              example: 1,
            },
            name: {
              type: 'string',
              description: 'Nombre del proyecto',
              example: 'Proyecto Web',
            },
            description: {
              type: 'string',
              description: 'Descripción del proyecto',
              example: 'Sistema web para gestión de tareas',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación',
            },
          },
          required: ['name'],
        },
        Task: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID único de la tarea',
              example: 1,
            },
            title: {
              type: 'string',
              description: 'Título de la tarea',
              example: 'Implementar autenticación',
            },
            description: {
              type: 'string',
              description: 'Descripción detallada de la tarea',
              example: 'Implementar sistema de autenticación JWT',
            },
            status: {
              type: 'string',
              description: 'Estado de la tarea',
              example: 'pending',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha de creación',
            },
          },
          required: ['title'],
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Mensaje de error',
              example: 'Recurso no encontrado',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Rutas donde buscar anotaciones JSDoc
};

export const swaggerSpec = swaggerJsdoc(options);

