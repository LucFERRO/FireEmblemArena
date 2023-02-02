const { Router } = require('express')

import { fighterHandler } from "../core/initialisation";

export const fighterController = Router();

/**
 * @swagger
 * tags:
 *      name: Fighters
 *      description: Manage fighters
 */

/**
 * @openapi
 * /api/fighters/{id}:
 *   get:
 *      tags: [Fighters]
 *      description: Get fighter by id.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 11
 *      responses:
 *        200:
 *          description: Get by id.
 */
fighterController.get('/:id', fighterHandler.getFighterById)