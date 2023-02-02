import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { CharacterClass } from "../model/class.model";

export class ClassHandler {

    private classService: IService<CharacterClass>

    constructor(service: IService<CharacterClass>) {
        this.classService = service
    }

    getClassById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)
        try {
            const result = await this.classService.findById(id);
            if (result === null) return res.status(404).json({ message: "Requested class_id does not exist." })
            res.status(200).json(result)

        } catch (err) {
            res.status(500).json(err)
        }

    }

    getClasses = async (req: Request, res: Response) => {
        try {
            const result = await this.classService.findAll();
            res.status(200).json(result)

        } catch (err) {
            res.status(500).json(err)
        }

    }

    createClass = async (req: Request, res: Response) => {
        const { name, level, class_id, base_hp, base_str, base_mag, base_dex, base_spd, base_def, base_res, base_lck, sprite } = req.body

        try {
            const result = await this.classService.create(req.body)
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    updateClass = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)

        try {
            const result = await this.classService.update(req.body, id)
            if (result) return res.status(200).json({message: 'Class successfully updated.'})
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    deleteClass = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id)

        try {
            const result = await this.classService.delete(id)
            if (result) return res.status(200).json({message: 'Class successfully deleted.'})
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

}