import firebase from "firebase/app";
import 'firebase/storage';
import {IUploadTask, IUploadTaskSnapshot, OFStorageError} from "@omnifire/api";
import OFUploadTaskSnapshot from "./OFUploadTaskSnapshot";

export default class OFUploadTask implements IUploadTask {
    private readonly webUploadTask: firebase.storage.UploadTask;

    constructor(webUploadTask: firebase.storage.UploadTask) {
        this.webUploadTask = webUploadTask;
    }

    async cancel(): Promise<boolean> {
        return this.webUploadTask.cancel();
    }

    async catch(onRejected: (error: OFStorageError) => any): Promise<any> {
        return this.webUploadTask.catch(onRejected);
    }

    on(event: 'state_changed',
        next?: ((snapshot: IUploadTaskSnapshot) => any) | null, 
        error?: ((error: OFStorageError) => any) | null,
        complete?: (() => void) | null): Function {
        return this.webUploadTask.on(event, (webUploadTaskSnap) => {
            next?.(new OFUploadTaskSnapshot(webUploadTaskSnap));
        }, error, complete);
    }

    async pause(): Promise<boolean> {
        return this.webUploadTask.pause();
    }

    async resume(): Promise<boolean> {
        return this.webUploadTask.resume();
    }

    async then(
        onFulfilled?: ((snapshot: IUploadTaskSnapshot) => any) | null,
        onRejected?: ((error: OFStorageError) => any) | null): Promise<any> {
        this.webUploadTask.then((webUploadTaskSnap) => {
            onFulfilled?.(new OFUploadTaskSnapshot(webUploadTaskSnap));
        }, onRejected);
    }


}