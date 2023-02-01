import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { Character } from "../model/character.model";

export class CharacterService implements IService<Character> {

    private characterRepository: IRepository<Character>;

    constructor(_characterRepository: IRepository<Character>) {
        this.characterRepository = _characterRepository;
    }
    findById(id: number): Promise<Character | null> {
        return this.characterRepository.findById(id)
    }
    create(t: Character): Promise<Character | undefined> {
        throw new Error("Method not implemented.");
    }
    update(t: Character, id: number): Promise<number | boolean | undefined> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<any> {
        return this.characterRepository.findAll()
    }
}