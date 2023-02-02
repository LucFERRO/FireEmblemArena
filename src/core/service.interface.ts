export interface IService<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(data: T): Promise<T | undefined>;
    update(data: T, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<boolean | number>;
}

export interface FighterIService {
    getFighter(id: number): Promise<any | null>;
}