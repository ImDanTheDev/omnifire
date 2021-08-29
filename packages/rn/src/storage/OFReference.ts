import {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IReference, IUploadTask, OFSettableMetadata, OFUploadMetadata } from "@omnifire/api";
import OFUploadTask from './OFUploadTask';

export default class OFReference implements IReference {

    private readonly rnRef: FirebaseStorageTypes.Reference;

    constructor(rnRef: FirebaseStorageTypes.Reference) {
        this.rnRef = rnRef;
    }

    child(path: string): IReference {
        const rnRef = this.rnRef.child(path);
        return new OFReference(rnRef);
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
        return new OFUploadTask(rnUploadTask);
    }

    async updateMetadata(metadata: OFSettableMetadata): Promise<any> {
        const rnFullMetadata = await this.rnRef.updateMetadata(metadata);
        return rnFullMetadata;
    }

}