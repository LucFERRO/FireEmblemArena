import { IRepository } from "../core/respository.interface";
import { IService } from "../core/service.interface";
import { CharacterClass } from "../model/class.model";

export class ClassService implements IService<CharacterClass> {

    private classRepository: IRepository<CharacterClass>;

    constructor(_classRepository: IRepository<CharacterClass>) {
        this.classRepository = _classRepository;
    }
    findById(id: number): Promise<CharacterClass | null> {
        return this.classRepository.findById(id)
    }
    findAll(): Promise<any> {
        return this.classRepository.findAll()
    }
    create(data: CharacterClass): Promise<CharacterClass | undefined> {
        return this.classRepository.create(data)
    }
    update(data: CharacterClass, id: number): Promise<number | boolean | undefined> {
        return this.classRepository.update(data, id)
    }
    delete(id: number): Promise<number | boolean> {
        return this.classRepository.delete(id)
    }
}