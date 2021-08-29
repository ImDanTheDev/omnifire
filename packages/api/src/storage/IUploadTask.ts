import IUploadTaskSnapshot from "./IUploadTaskSnapshot";
import OFStorageError from "./OFStorageError";

export default interface IUploadTask {
    cancel: () => Promise<boolean>;
    catch: (onRejected: (error: OFStorageError) => any) => Promise<any>;
    on: (
        event: 'state_changed',
        next?: ((snapshot: IUploadTaskSnapshot) => any) | null, 
        error?: ((error: OFStorageError) => any) | null,
        complete?: (() => void) | null) => Function;
    pause: () => Promise<boolean>;
    resume: () => Promise<boolean>;
    then: (
        onFulfilled?: ((snapshot: IUploadTaskSnapshot) => any) | null,
        onRejected?: ((error: OFStorageError) => any) | null
    ) => Promise<any>;
}