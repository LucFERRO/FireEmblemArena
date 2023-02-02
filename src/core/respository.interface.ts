export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(data: T): Promise<T>;
    update(data: T, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<number>;
}

export interface FighterIRepository {
    getFighter(id: number): Promise<any | null>;
}