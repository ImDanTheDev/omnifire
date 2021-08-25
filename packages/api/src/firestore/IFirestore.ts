import ICollectionReference from "./ICollectionReference";
import OFDocumentData from "./OFDocumentData";

export default interface IFirestore {
    collection: (path: string) => ICollectionReference<OFDocumentData>;
}