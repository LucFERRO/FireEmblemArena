import { Router } from "express";
import { swaggerRouter } from "./swagger"

import { characterController } from "../controller/character.controller";

export const router = Router()

router.use('/docs', swaggerRouter)

router.use('/characters', characterController)


router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Ressource not found.' })
})