import { DataStub } from "./datastub";
import { DataSupplier } from "./datasupplier";
declare class DataRadix extends DataStub {
    protected _suppliers: DataSupplier[];
    protected _curr: DataSupplier | null;
    constructor(name: string);
    get curr(): DataSupplier | null;
    get suppliers(): DataSupplier[];
    addSupplier(name: string): DataSupplier;
    set activeSupplier(name: string);
}
export { DataRadix };
