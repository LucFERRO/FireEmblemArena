import { IRepository } from "../core/respository.interface";
import { Character } from "../model/character.model";

export class CharacterRepository implements IRepository<Character> {
    async findById(id: number): Promise<Character | null> {
        return Character.findByPk(id, { include: ['class','weapon'] })
    }
    async findAll(): Promise<any> {
        return Character.findAll({ include: ['class','weapon'] })
    }
    async create(data: any): Promise<Character> {
        return Character.create(data)
    }
    async update(data: any, id: number): Promise<number | boolean | undefined> {
        let updated = await Character.update(data, { where: { character_id: id } })
        return updated[0]
    }
    async delete(id: number): Promise<number> {
        return Character.destroy({ where: { character_id: id } })
    }
}