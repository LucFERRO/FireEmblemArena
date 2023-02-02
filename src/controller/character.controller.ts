const { Router } = require('express')

import { characterHandler } from "../core/initialisation";

export const characterController = Router();

/**
 * @swagger
 * tags:
 *      name: Characters
 *      description: Manage characters
 */

/**
 * @openapi
 * /api/characters:
 *  get:
 *      tags: [Characters]
 *      description: Get all character
 *      responses:
 *        200:
 *          description: Get all characters.
 */
characterController.get('/', characterHandler.getCharacters)

/**
 * @openapi
 * /api/characters/{id}:
 *   get:
 *      tags: [Characters]
 *      description: Get character by id.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 10
 *      responses:
 *        200:
 *          description: Get by id.
 */
characterController.get('/:id', characterHandler.getCharacterById)

/**
 * @openapi
 * /api/characters:
 *   post:
 *      tags: [Characters]
 *      description: Create a new character.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "name": "Test", "level" : 5, "class_id" : 10, "weapon_id" : 10, "base_hp": 10, "base_str": 10, "base_mag": 10, "base_dex": 10, "base_spd": 10, "base_def": 10, "base_res": 10, "base_lck": 10, "sprite" : "test" }
 *      responses:
 *        200:
 *          description: Create.
 */
characterController.post('/', characterHandler.createCharacter)


/**
 * @openapi
 * /api/characters/{id}:
 *  put:
 *      tags: [Characters]
 *      description: Update a character.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 10
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "name": "Test", "level" : 5, "class_id" : 10, "weapon_id" : 10, "base_hp": 10, "base_str": 10, "base_mag": 10, "base_dex": 10, "base_spd": 10, "base_def": 10, "base_res": 10, "base_lck": 10, "sprite" : "test" }
 *      responses:
 *        200:
 *          description: Update.
 */
characterController.put('/:id', characterHandler.updateCharacter)

/**
 * @openapi
 * /api/characters/{id}:
 *  delete:
 *      tags: [Characters]
 *      description: Delete a character
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: integer
 *         default: 10
 *      responses:
 *        200:
 *          description: Delete.
 */
characterController.delete('/:id', characterHandler.deleteCharacter)