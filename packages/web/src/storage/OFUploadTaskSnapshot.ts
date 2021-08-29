import firebase from "firebase/app";
import 'firebase/storage';
import { IReference, IUploadTask, IUploadTaskSnapshot } from "@omnifire/api";
import OFReference from "./OFReference";
import OFUploadTask from "./OFUploadTask";

export default class OFUploadTaskSnapshot implements IUploadTaskSnapshot {
    private readonly webUploadTaskSnap: firebase.storage.UploadTaskSnapshot;
    
    ref: IReference;
    task: IUploadTask;

    constructor(webUploadTaskSnap: firebase.storage.UploadTaskSnapshot) {
        this.webUploadTaskSnap = webUploadTaskSnap;
        this.ref = new OFReference(this.webUploadTaskSnap.ref);
        this.task = new OFUploadTask(this.webUploadTaskSnap.task);
    }

}