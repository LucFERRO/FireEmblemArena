const { Router } = require('express')

import { classHandler } from "../core/initialisation";

export const classController = Router();

/**
 * @swagger
 * tags:
 *      name: Classes
 *      description: Manage classes
 */

/**
 * @openapi
 * /api/classes:
 *  get:
 *      tags: [Classes]
 *      description: Get all class
 *      responses:
 *        200:
 *          description: Get all classes.
 */
classController.get('/', classHandler.getClasses)

/**
 * @openapi
 * /api/classes/{id}:
 *   get:
 *      tags: [Classes]
 *      description: Get class by id.
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
classController.get('/:id', classHandler.getClassById)

/**
 * @openapi
 * /api/classes:
 *   post:
 *      tags: [Classes]
 *      description: Create a new class.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "class_name": "Test", "available_weap": ['sword'], "bonus_hp": 10, "bonus_str": 10, "bonus_mag": 10, "bonus_dex": 10, "bonus_spd": 10, "bonus_def": 10, "bonus_res": 10, "bonus_lck": 10}
 *      responses:
 *        200:
 *          description: Create.
 */
classController.post('/', classHandler.createClass)


/**
 * @openapi
 * /api/classes/{id}:
 *  put:
 *      tags: [Classes]
 *      description: Update a class.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 11
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "class_name": "Test", "available_weap": ['sword'], "bonus_hp": 10, "bonus_str": 10, "bonus_mag": 10, "bonus_dex": 10, "bonus_spd": 10, "bonus_def": 10, "bonus_res": 10, "bonus_lck": 10 }
 *      responses:
 *        200:
 *          description: Update.
 */
classController.put('/:id', classHandler.updateClass)

/**
 * @openapi
 * /api/classes/{id}:
 *  delete:
 *      tags: [Classes]
 *      description: Delete a class
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 11
 *      responses:
 *        200:
 *          description: Delete.
 */
classController.delete('/:id', classHandler.deleteClass)