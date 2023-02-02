import { IRepository } from "../core/respository.interface";
import { CharacterClass } from "../model/class.model";

export class ClassRepository implements IRepository<CharacterClass> {
    async findById(id: number): Promise<CharacterClass | null> {
        return CharacterClass.findByPk(id)
    }
    async findAll(): Promise<any> {
        return CharacterClass.findAll()
    }
    async create(data: any): Promise<CharacterClass> {
        return CharacterClass.create(data)
    }
    async update(data: any, id: number): Promise<number | boolean | undefined> {
        let updated = await CharacterClass.update(data, { where: { class_id: id } })
        return updated[0]
    }
    async delete(id: number): Promise<number> {
        return CharacterClass.destroy({ where: { class_id: id } })
    }
}