import ICollectionReference from "./ICollectionReference";
import OFDocumentData from "./OFDocumentData";
import OFFirestoreSettings from "./OFFirestoreSettings";

export default interface IFirestore {
    collection: (path: string) => ICollectionReference<OFDocumentData>;
    settings: (settings: OFFirestoreSettings) => Promise<void>;
}