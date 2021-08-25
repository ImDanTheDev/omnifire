import firebase from "firebase";
import { IDocumentReference, IQueryDocumentSnapshot, OFDocumentData, OFSnapshotOptions } from "@omnifire/api";
import OFDocumentReference from "./OFDocumentReference";

export default class OFQueryDocumentSnapshot<T = OFDocumentData> implements IQueryDocumentSnapshot<T> {
    
    exists: boolean;
    ref: IDocumentReference<T>;
    id: string;

    private readonly webQueryDocSnap: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;

    constructor(webQueryDocSnap: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) {
        this.webQueryDocSnap = webQueryDocSnap;
        this.exists = webQueryDocSnap.exists;
        this.ref = new OFDocumentReference(webQueryDocSnap.ref);
        this.id = webQueryDocSnap.id;
    }

    data(options?: OFSnapshotOptions | undefined): T {
        const webData = this.webQueryDocSnap.data(options);
        return webData as T;
    }

    get(path: string, options?: OFSnapshotOptions | undefined): any {
        const webValue = this.webQueryDocSnap.get(path, options);
        return webValue;
    }

}