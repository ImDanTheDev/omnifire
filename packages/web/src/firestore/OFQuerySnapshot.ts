import firebase from "firebase";
import { IDocumentChange, IQueryDocumentSnapshot, IQuerySnapshot, OFDocumentData, OFSnapshotListenOptions } from "@omnifire/api";
import OFQueryDocumentSnapshot from "./OFQueryDocumentSnapshot";
import OFDocumentChange from "./OFDocumentChange";

export default class OFQuerySnapshot<T = OFDocumentData> implements IQuerySnapshot<T> {
    docs: IQueryDocumentSnapshot<T>[];
    size: number;

    private readonly webQuerySnap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>;

    constructor(webQuerySnap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
        this.webQuerySnap = webQuerySnap;
        this.docs = webQuerySnap.docs.map((webQueryDocSnap: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {
            return new OFQueryDocumentSnapshot(webQueryDocSnap);
        });
        this.size = webQuerySnap.size;
    }

    docChanges(options?: OFSnapshotListenOptions | undefined): IDocumentChange<T>[] {
        const webDocChanges: firebase.firestore.DocumentChange<firebase.firestore.DocumentData>[] = this.webQuerySnap.docChanges(options);

        return webDocChanges.map((webDocChange) => {
            return new OFDocumentChange(webDocChange)
        });
    }

    forEach(callback: (result: IQueryDocumentSnapshot<T>) => void, thisArg?: any): void {
        this.webQuerySnap.forEach((webQueryDocSnap) => {
            callback(new OFQueryDocumentSnapshot(webQueryDocSnap));
        });
    }

}