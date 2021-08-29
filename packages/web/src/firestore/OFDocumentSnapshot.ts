import firebase from "firebase/app";
import 'firebase/firestore';
import { IDocumentReference, IDocumentSnapshot, OFDocumentData, OFSnapshotOptions } from "@omnifire/api";
import OFDocumentReference from "./OFDocumentReference";

export default class OFDocumentSnapshot<T = OFDocumentData> implements IDocumentSnapshot<T> {
    exists: boolean;
    ref: IDocumentReference<T>;
    id: string;

    private readonly webDocSnap: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;

    constructor(webDocSnap: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>) {
        this.webDocSnap = webDocSnap;
        this.exists = webDocSnap.exists;
        this.ref = new OFDocumentReference(webDocSnap.ref);
        this.id = webDocSnap.id;
    }

    data(options?: OFSnapshotOptions | undefined): T | undefined {
        const webDocData: firebase.firestore.DocumentData | undefined = this.webDocSnap.data(options);
        return webDocData as T;
    }

    get(path: string, options?: OFSnapshotOptions | undefined): any {
        const webValue: any = this.webDocSnap.get(path, options);
        return webValue;
    };

}