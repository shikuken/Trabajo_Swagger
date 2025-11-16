import { Router } from 'express';
import * as ctrl from '../controllers/people';
const router = Router();

/**
 * @swagger
 * /api/v1/people:
 *   get:
 *     summary: Obtener lista de todas las personas
 *     tags: [People]
 *     responses:
 *       200:
 *         description: Lista de personas obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get('/', ctrl.list);

/**
 * @swagger
 * /api/v1/people/{id}:
 *   get:
 *     summary: Obtener una persona por ID
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la persona
 *     responses:
 *       200:
 *         description: Persona obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Persona no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/:id', ctrl.getOne);

/**
 * @swagger
 * /api/v1/people:
 *   post:
 *     summary: Crear una nueva persona
 *     tags: [People]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 format: email
 *                 example: juan@example.com
 *               role:
 *                 type: string
 *                 example: Desarrollador
 *     responses:
 *       201:
 *         description: Persona creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       400:
 *         description: Error de validación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', ctrl.create);

/**
 * @swagger
 * /api/v1/people/{id}:
 *   put:
 *     summary: Actualizar una persona existente
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la persona
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Juan Pérez
 *               email:
 *                 type: string
 *                 format: email
 *                 example: juan@example.com
 *               role:
 *                 type: string
 *                 example: Desarrollador
 *     responses:
 *       200:
 *         description: Persona actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Persona actualizada
 *       404:
 *         description: Persona no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', ctrl.update);

/**
 * @swagger
 * /api/v1/people/{id}:
 *   delete:
 *     summary: Eliminar una persona
 *     tags: [People]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la persona
 *     responses:
 *       200:
 *         description: Persona eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Persona eliminada
 *       404:
 *         description: Persona no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', ctrl.remove);

export default router;
