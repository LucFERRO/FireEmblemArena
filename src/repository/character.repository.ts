import { IRepository } from "../core/respository.interface";
import { Character } from "../model/character.model";

export class CharacterRepository implements IRepository<Character> {
    findById(id: number): Promise<Character | null> {
        return Character.findByPk(id)
    }
    create(t: Character): Promise<Character> {
        throw new Error("Method not implemented.");
    }
    update(data: Character, id: number): Promise<number | boolean | undefined> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<any> {
        return Character.findAll()
    }
}