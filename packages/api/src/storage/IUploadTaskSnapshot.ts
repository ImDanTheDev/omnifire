import IReference from "./IReference";
import IUploadTask from "./IUploadTask";

export default interface IUploadTaskSnapshot {
    ref: IReference;
    task: IUploadTask;
}