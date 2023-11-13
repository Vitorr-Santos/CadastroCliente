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

declare class DataSupplier extends DataStub {
    constructor(dbname: string, storename: string);
}

declare class DataRadix extends DataStub {
    protected _suppliers: DataSupplier[];
    protected _curr: DataSupplier | null;
    constructor(name: string);
    get curr(): DataSupplier | null;
    get suppliers(): DataSupplier[];
    addSupplier(name: string): DataSupplier;
    set activeSupplier(name: string);
}

declare class DataRadixService<D> {
    protected _supplier: DataSupplier;
    constructor(ds: DataSupplier);
    get supplier(): DataSupplier;
    load: () => Promise<D[]>;
    insert: (key: string, value: D) => Promise<void>;
}

declare function useDataService<D>(nameDB: string, nameService: string): {
    db: DataRadix;
    ds: DataSupplier;
    service: DataRadixService<D>;
};

export { useDataService };
