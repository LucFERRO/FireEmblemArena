import { Request, Response } from "express";
import { FighterIService } from "../core/service.interface";
import { Character } from "../model/character.model";

export class FighterHandler {

    private fighterService: FighterIService

    constructor(service: FighterIService) {
        this.fighterService = service
    }

    getFighterById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await this.fighterService.getFighter(id);
            if (result === null) return res.status(404).json({ message: "Requested character_id does not exist." })
            res.status(200).json(result)

        } catch (err) {
            res.status(500).json(err)
        }
    }
}