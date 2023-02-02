import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { Character } from "../model/character.model";

export class CharacterHandler {

    private characterService: IService<Character>

    constructor(service: IService<Character>) {
        this.characterService = service
    }

    getCharacterById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await this.characterService.findById(id);
            if (result === null) return res.status(404).json({ message: "Requested character_id does not exist." })
            res.status(200).json(result)

        } catch (err) {
            res.status(500).json(err)
        }

    }

    getCharacters = async (req: Request, res: Response) => {
        try {
            const result = await this.characterService.findAll();
            res.status(200).json(result)

        } catch (err) {
            res.status(500).json(err)
        }

    }

    createCharacter = async (req: Request, res: Response) => {
        const { name, level, class_id, base_hp, base_str, base_mag, base_dex, base_spd, base_def, base_res, base_lck, sprite } = req.body

        try {
            const result = await this.characterService.create(req.body)
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    updateCharacter = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)

        try {
            const result = await this.characterService.update(req.body, id)
            if (result) return res.status(200).json({message: 'Character successfully updated.'})
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    deleteCharacter = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)

        try {
            const result = await this.characterService.delete(id)
            if (result) return res.status(200).json({message: 'Character successfully deleted.'})
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

}