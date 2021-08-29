import IUploadTask from "./IUploadTask";
import OFSettableMetadata from "./OFSettableMetadata";
import OFUploadMetadata from "./OFUploadMetadata";

export default interface IReference {
    child: (path: string) => IReference;
    delete: () => Promise<any>;
    getDownloadURL: () => Promise<any>;
    getMetadata: () => Promise<any>;
    put: (data: Blob | Uint8Array | ArrayBuffer, metadata?: OFUploadMetadata) => IUploadTask;
    updateMetadata: (metadata: OFSettableMetadata) => Promise<any>;
}