import OFDocumentData from "./OFDocumentData";
import IQueryDocumentSnapshot from "./IQueryDocumentSnapshot";
import OFDocumentChangeType from "./OFDocumentChangeType";

export default interface IDocumentChange<T = OFDocumentData> {
    type: OFDocumentChangeType;
    doc: IQueryDocumentSnapshot<T>;
}