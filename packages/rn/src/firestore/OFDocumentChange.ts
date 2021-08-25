import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { IDocumentChange, IQueryDocumentSnapshot, OFDocumentChangeType, OFDocumentData } from "@omnifire/api";
import OFQueryDocumentSnapshot from './OFQueryDocumentSnapshot';

export default class OFDocumentChange<T = OFDocumentData> implements IDocumentChange<T> {
    type: OFDocumentChangeType;
    doc: IQueryDocumentSnapshot<T>;

    private readonly rnDocChange: FirebaseFirestoreTypes.DocumentChange<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnDocChange: FirebaseFirestoreTypes.DocumentChange<FirebaseFirestoreTypes.DocumentData>) {
        this.rnDocChange = rnDocChange;
        this.type = rnDocChange.type;
        this.doc = new OFQueryDocumentSnapshot(rnDocChange.doc);
    }

}