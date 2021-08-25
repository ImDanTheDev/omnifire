import ICollectionReference from "./ICollectionReference";
import OFDocumentData from "./OFDocumentData";
import IDocumentSnapshot from "./IDocumentSnapshot";
import OFFirestoreError from "./OFFirestoreError";
import OFGetOptions from "./OFGetOptions";

export default interface IDocumentReference<T = OFDocumentData> {

    id: string;
    collection: (path: string) => ICollectionReference<OFDocumentData>;
    get: (options?: OFGetOptions) => Promise<IDocumentSnapshot<T>>;
    set: (data: T) => Promise<void>;
    delete: () => Promise<void>;
    onSnapshot: (
        onNext: (snapshot: IDocumentSnapshot<T>) => void,
        onError?: (error: OFFirestoreError) => void,
        onCompletion?: () => void
    ) => () => void;
}