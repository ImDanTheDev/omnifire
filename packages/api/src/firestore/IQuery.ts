import OFDocumentData from "./OFDocumentData";
import IQuerySnapshot from "./IQuerySnapshot";
import OFGetOptions from "./OFGetOptions";
import OFWhereFilterOps from "./OFWhereFilterOp";
import OFFirestoreError from "./OFFirestoreError";

export default interface IQuery<T = OFDocumentData> {
    where: (path: string, opStr: OFWhereFilterOps, value: any) => IQuery<T>;
    limit: (limit: number) => IQuery<T>;
    get: (options?: OFGetOptions) => Promise<IQuerySnapshot<T>>;
    onSnapshot: (
        onNext: (snapshot: IQuerySnapshot<T>) => void,
        onError?: (error: OFFirestoreError) => void,
        onCompletion?: () => void    
    ) => () => void;
}