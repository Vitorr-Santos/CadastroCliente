import { DataSupplier } from "./datasupplier";
declare class DataRadixService<D> {
    protected _supplier: DataSupplier;
    constructor(ds: DataSupplier);
    get supplier(): DataSupplier;
    load: () => Promise<D[]>;
    insert: (key: string, value: D) => Promise<void>;
}
export { DataRadixService };
