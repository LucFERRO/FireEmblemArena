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
 *         default: { "activity":"activity","lastname": "lastname", "firstname": "firstname", "mail": "email@email.fr", "password": "string","birthdate": "01-01-2000", "phone_number" : "0123456789", "description": "description","avatar": "avatar" }
 *      responses:
 *        200:
 *          description: Create.
 */
// characterController.post('/', characterHandler.createcharacter)


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
 *         default: { "activity":"activity","lastname": "lastname", "firstname": "firstname", "mail": "email@email.fr", "password": "string","birthdate": "01-01-2000", "phone_number" : "0123456789", "description": "description","avatar": "avatar" }
 *      responses:
 *        200:
 *          description: Update.
 */
// characterController.put('/:id', characterHandler.updatecharacter)

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
// characterController.delete('/:id',characterHandler.deletecharacter)