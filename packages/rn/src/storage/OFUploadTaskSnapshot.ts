import {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IReference, IUploadTask, IUploadTaskSnapshot } from "@omnifire/api";
import OFReference from './OFReference';
import OFUploadTask from './OFUploadTask';
import { toOFReference, toOFUploadTask } from './utils';

export default class OFUploadTaskSnapshot implements IUploadTaskSnapshot {
    private readonly rnUploadTaskSnap: FirebaseStorageTypes.TaskSnapshot;

    ref: IReference;
    task: IUploadTask;

    constructor(rnUploadTaskSnap: FirebaseStorageTypes.TaskSnapshot) {
        this.rnUploadTaskSnap = rnUploadTaskSnap;
        this.ref = toOFReference(this.rnUploadTaskSnap.ref);
        this.task = toOFUploadTask(this.rnUploadTaskSnap.task);
    }
    
}