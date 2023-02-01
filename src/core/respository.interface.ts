export interface IRepository<T> {
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | null>;
    create(t: T): Promise<T>;
    update(data: T, id: number): Promise<boolean | number | undefined>;
    delete(id: number): Promise<boolean>;
}
