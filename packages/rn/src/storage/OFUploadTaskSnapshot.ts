import {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IReference, IUploadTask, IUploadTaskSnapshot } from "@omnifire/api";
import OFReference from './OFReference';
import OFUploadTask from './OFUploadTask';

export default class OFUploadTaskSnapshot implements IUploadTaskSnapshot {
    private readonly rnUploadTaskSnap: FirebaseStorageTypes.TaskSnapshot;

    ref: IReference;
    task: IUploadTask;

    constructor(rnUploadTaskSnap: FirebaseStorageTypes.TaskSnapshot) {
        this.rnUploadTaskSnap = rnUploadTaskSnap;
        this.ref = new OFReference(this.rnUploadTaskSnap.ref);
        this.task = new OFUploadTask(this.rnUploadTaskSnap.task);
    }
    
}