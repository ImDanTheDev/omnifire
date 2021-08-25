import OFDocumentData from "./OFDocumentData";
import IDocumentSnapshot from "./IDocumentSnapshot";
import OFSnapshotOptions from "./OFSnapshotOptions";

export default interface IQueryDocumentSnapshot<T = OFDocumentData> extends IDocumentSnapshot<T> {
    data: (options?: OFSnapshotOptions) => T;
    
}