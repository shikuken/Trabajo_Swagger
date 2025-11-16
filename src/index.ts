import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { initDb } from './db';
import projectsRouter from './routes/projects';
import tasksRouter from './routes/tasks';
import peopleRouter from './routes/people';
import { swaggerSpec } from './swagger';

const app = express();
app.use(express.json());

initDb(); // crea base de datos si no existe

// Configuración de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/tasks', tasksRouter);
app.use('/api/v1/people', peopleRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});
