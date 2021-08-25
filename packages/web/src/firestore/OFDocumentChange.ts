import firebase from "firebase";
import { IDocumentChange, IQueryDocumentSnapshot, OFDocumentChangeType, OFDocumentData } from "@omnifire/api";
import OFQueryDocumentSnapshot from "./OFQueryDocumentSnapshot";

export default class OFDocumentChange<T = OFDocumentData> implements IDocumentChange<T> {
    type: OFDocumentChangeType;
    doc: IQueryDocumentSnapshot<T>;

    private readonly webDocChange: firebase.firestore.DocumentChange<firebase.firestore.DocumentData>;

    constructor(webDocChange: firebase.firestore.DocumentChange<firebase.firestore.DocumentData>) {
        this.webDocChange = webDocChange;
        this.type = webDocChange.type;
        this.doc = new OFQueryDocumentSnapshot(webDocChange.doc);
    }
}