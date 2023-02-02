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
    findAll(): Promise<any> {
        return this.characterRepository.findAll()
    }
    create(data: Character): Promise<Character | undefined> {
        return this.characterRepository.create(data)
    }
    update(data: Character, id: number): Promise<number | boolean | undefined> {
        return this.characterRepository.update(data, id)
    }
    delete(id: number): Promise<number | boolean> {
        return this.characterRepository.delete(id)
    }
}