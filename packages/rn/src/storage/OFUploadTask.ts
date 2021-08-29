import {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IUploadTask, IUploadTaskSnapshot, OFStorageError } from "@omnifire/api";
import OFUploadTaskSnapshot from './OFUploadTaskSnapshot';

export default class OFUploadTask implements IUploadTask {
    private readonly rnUploadTask: FirebaseStorageTypes.Task;

    constructor(rnUploadTask: FirebaseStorageTypes.Task) {
        this.rnUploadTask = rnUploadTask;
    }

    async cancel(): Promise<boolean> {
        return this.rnUploadTask.cancel();
    }

    async catch(onRejected: (error: OFStorageError) => any): Promise<any> {
        return this.rnUploadTask.catch((rnError) => {
            onRejected({
                code: rnError.code,
                message: rnError.message,
                name: rnError.name,
                serverResponse: null,
                stack: rnError.stack
            });
        });
    }

    on(event: 'state_changed',
        next?: ((snapshot: IUploadTaskSnapshot) => any) | null, 
        error?: ((error: OFStorageError) => any) | null,
        complete?: (() => void) | null): Function {

        return this.rnUploadTask.on(event, (webUploadTaskSnap) => {
            next?.(new OFUploadTaskSnapshot(webUploadTaskSnap));
        }, (rnError) => {
            error?.({
                code: rnError.code,
                message: rnError.message,
                name: rnError.name,
                serverResponse: null,
                stack: rnError.stack
            });
        }, complete);
    }

    async pause(): Promise<boolean> {
        return this.rnUploadTask.pause();
    }

    async resume(): Promise<boolean> {
        return this.rnUploadTask.resume();
    }

    async then(
        onFulfilled?: ((snapshot: IUploadTaskSnapshot) => any) | null,
        onRejected?: ((error: OFStorageError) => any) | null): Promise<any> {
        this.rnUploadTask.then((webUploadTaskSnap) => {
            onFulfilled?.(new OFUploadTaskSnapshot(webUploadTaskSnap));
        }, (rnError) => {
            onRejected?.({
                code: rnError.code,
                message: rnError.message,
                name: rnError.name,
                serverResponse: null,
                stack: rnError.stack
            });
        });
    }
}