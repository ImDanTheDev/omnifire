import firebase from "firebase"
import OFDocumentReference from "./OFDocumentReference"
import OFDocumentSnapshot from "./OFDocumentSnapshot";
import OFQuery from "./OFQuery";
import OFQuerySnapshot from "./OFQuerySnapshot";

export const toOFDocumentReference = <T>(ref: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>): OFDocumentReference<T> => {
    return new OFDocumentReference(ref);
}

export const toOFDocumentSnapshot = <T>(ref: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): OFDocumentSnapshot<T> => {
    return new OFDocumentSnapshot(ref);
}

export const toOFQuery = <T>(rnQuery: firebase.firestore.Query<firebase.firestore.DocumentData>): OFQuery<T> => {
    return new OFQuery(rnQuery);
}

export const toOFQuerySnapshot = <T>(rnQuerySnap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>): OFQuerySnapshot<T> => {
    return new OFQuerySnapshot(rnQuerySnap);
}