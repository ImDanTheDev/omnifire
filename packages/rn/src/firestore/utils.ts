import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore"
import OFDocumentReference from "./OFDocumentReference"
import OFDocumentSnapshot from "./OFDocumentSnapshot";
import OFQuery from "./OFQuery";
import OFQuerySnapshot from "./OFQuerySnapshot";

export const toOFDocumentReference = <T>(ref: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>): OFDocumentReference<T> => {
    return new OFDocumentReference(ref);
}

export const toOFDocumentSnapshot = <T>(ref: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>): OFDocumentSnapshot<T> => {
    return new OFDocumentSnapshot(ref);
}

export const toOFQuery = <T>(rnQuery: FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData>): OFQuery<T> => {
    return new OFQuery(rnQuery);
}

export const toOFQuerySnapshot = <T>(rnQuerySnap: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>): OFQuerySnapshot<T> => {
    return new OFQuerySnapshot(rnQuerySnap);
}