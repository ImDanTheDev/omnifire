import {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IReference, IUploadTask, OFSettableMetadata, OFUploadMetadata } from "@omnifire/api";
import { toOFReference, toOFUploadTask } from './utils';

export default class OFReference implements IReference {

    private readonly rnRef: FirebaseStorageTypes.Reference;

    constructor(rnRef: FirebaseStorageTypes.Reference) {
        this.rnRef = rnRef;
    }

    child(path: string): IReference {
        const rnRef = this.rnRef.child(path);
        return toOFReference(rnRef);
    }

    async delete(): Promise<any> {
        return this.rnRef.delete();
    }

    async getDownloadURL(): Promise<any> {
        return this.rnRef.getDownloadURL();
    }

    async getMetadata(): Promise<any> {
        const rnFullMetadata: FirebaseStorageTypes.FullMetadata = await this.rnRef.getMetadata();
        return rnFullMetadata;
    }

    put(data: Blob | Uint8Array | ArrayBuffer, metadata?: OFUploadMetadata | undefined): IUploadTask {
        const rnUploadTask = this.rnRef.put(data, metadata);
        return toOFUploadTask(rnUploadTask);
    }

    putFile(filePath: string, metadata?: OFUploadMetadata | undefined): IUploadTask {
        const rnUploadTask = this.rnRef.putFile(filePath, metadata);
        return toOFUploadTask(rnUploadTask);
    }

    async updateMetadata(metadata: OFSettableMetadata): Promise<any> {
        const rnFullMetadata = await this.rnRef.updateMetadata(metadata);
        return rnFullMetadata;
    }

}