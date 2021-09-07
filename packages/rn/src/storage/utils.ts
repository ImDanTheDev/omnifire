import { FirebaseStorageTypes } from "@react-native-firebase/storage"
import { OFUploadTask } from ".";
import OFReference from "./OFReference";

export const toOFReference = (ref: FirebaseStorageTypes.Reference) => {
    return new OFReference(ref);
}

export const toOFUploadTask = (task: FirebaseStorageTypes.Task) => {
    return new OFUploadTask(task);
}