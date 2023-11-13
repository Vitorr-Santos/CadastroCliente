declare class DataStub {
    protected _name: string;
    protected _storename: string;
    protected _store: LocalForage;
    constructor(name: string, storename?: string);
    get dbname(): string;
    set dbname(n: string);
    get store(): LocalForage;
    get storename(): string;
}
export { DataStub };
