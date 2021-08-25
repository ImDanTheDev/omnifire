import IDocumentChange from "./IDocumentChange";
import OFDocumentData from "./OFDocumentData";
import IQueryDocumentSnapshot from "./IQueryDocumentSnapshot";
import OFSnapshotListenOptions from "./OFSnapshotListenOptions";

export default interface IQuerySnapshot<T = OFDocumentData> {
    docs: Array<IQueryDocumentSnapshot<T>>;
    size: number;
    
    docChanges: (options?: OFSnapshotListenOptions) => Array<IDocumentChange<T>>;
    forEach: (callback: (result: IQueryDocumentSnapshot<T>) => void, thisArg?: any) => void;
}