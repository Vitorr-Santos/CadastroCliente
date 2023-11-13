import { DataRadix } from "../db/dataradix";
import { DataRadixService } from "../db/dataservice";
declare function useDataService<D>(nameDB: string, nameService: string): {
    db: DataRadix;
    ds: import("../db/datasupplier").DataSupplier;
    service: DataRadixService<D>;
};
export { useDataService };
