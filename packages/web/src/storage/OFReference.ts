import firebase from "firebase/app";
import 'firebase/storage';
import { IReference, IUploadTask, OFSettableMetadata, OFUploadMetadata } from "@omnifire/api";
import OFUploadTask from "./OFUploadTask";

export default class OFReference implements IReference {
    private readonly webRef: firebase.storage.Reference;

    constructor(webRef: firebase.storage.Reference) {
        this.webRef = webRef;
    }

    child(path: string): IReference {
        const webRef = this.webRef.child(path);
        return new OFReference(webRef);
    }

    async delete(): Promise<any> {
        return this.webRef.delete();
    }

    async getDownloadURL(): Promise<any> {
        return this.webRef.getDownloadURL();
    }

    async getMetadata(): Promise<any> {
        return this.webRef.getMetadata();
    }

    put(data: Blob | Uint8Array | ArrayBuffer, metadata?: OFUploadMetadata | undefined): IUploadTask {
        const webUploadTask = this.webRef.put(data, metadata);
        return new OFUploadTask(webUploadTask);
    }

    putFile(filePath: string, metadata?: OFUploadMetadata | undefined): IUploadTask {
        throw new Error(`@omnifire/web does not support 'putFile'. Use 'put' instead.`);
    }

    async updateMetadata(metadata: OFSettableMetadata): Promise<any> {
        return this.webRef.updateMetadata(metadata);
    }
}