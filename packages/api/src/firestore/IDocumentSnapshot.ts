import OFDocumentData from "./OFDocumentData";
import IDocumentReference from "./IDocumentReference";
import OFSnapshotOptions from "./OFSnapshotOptions";

export default interface IDocumentSnapshot<T = OFDocumentData> {
    exists: boolean;
    ref: IDocumentReference<T>;
    id: string;
    data: (options?: OFSnapshotOptions) => T | undefined;
    get: (path: string, options?: OFSnapshotOptions) => any;
}