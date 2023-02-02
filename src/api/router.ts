import { Router } from "express";
import { swaggerRouter } from "./swagger"

import { characterController } from "../controller/character.controller";
import { classController } from "../controller/class.controller";
import { fighterController } from "../controller/fighter.controller";

export const router = Router()

router.use('/docs', swaggerRouter)

router.use('/characters', characterController)
router.use('/classes', classController)
router.use('/fighters', fighterController)


router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Ressource not found.' })
})