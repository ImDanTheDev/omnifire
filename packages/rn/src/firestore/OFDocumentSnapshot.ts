import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { IDocumentReference, IDocumentSnapshot, OFDocumentData, OFSnapshotOptions } from "@omnifire/api";
import OFDocumentReference from './OFDocumentReference';

export default class OFDocumentSnapshot<T = OFDocumentData> implements IDocumentSnapshot<T> {
    exists: boolean;
    ref: IDocumentReference<T>;
    id: string;

    private readonly rnDocSnap: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnDocSnap: FirebaseFirestoreTypes.DocumentSnapshot<FirebaseFirestoreTypes.DocumentData>) {
        this.rnDocSnap = rnDocSnap;
        this.id = rnDocSnap.id;
        this.ref = new OFDocumentReference(rnDocSnap.ref);
        this.exists = rnDocSnap.exists;
    }

    data(options?: OFSnapshotOptions | undefined): T | undefined {
        const rnData = this.rnDocSnap.data();
        return rnData as T | undefined;
    }

    get(path: string, options?: OFSnapshotOptions | undefined): any {
        const rnValue = this.rnDocSnap.get(path);
        return rnValue;
    }

}