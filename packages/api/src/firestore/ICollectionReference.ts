import OFDocumentData from "./OFDocumentData";
import IDocumentReference from "./IDocumentReference";
import IQuery from "./IQuery";

export default interface ICollectionReference<T = OFDocumentData> extends IQuery<T> {
    doc: (path?: string) => IDocumentReference<T>;
    add: (data: T) => Promise<IDocumentReference<T>>;
}