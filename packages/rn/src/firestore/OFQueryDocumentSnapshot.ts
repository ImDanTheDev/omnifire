import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { IDocumentReference, IQueryDocumentSnapshot, OFDocumentData, OFSnapshotOptions } from "@omnifire/api";
import OFDocumentReference from './OFDocumentReference';

export default class OFQueryDocumentSnapshot<T = OFDocumentData> implements IQueryDocumentSnapshot<T> {
    exists: boolean;
    ref: IDocumentReference<T>;
    id: string;

    private readonly rnQueryDocSnap: FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnQueryDocSnap: FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>) {
        this.rnQueryDocSnap = rnQueryDocSnap;
        this.exists = rnQueryDocSnap.exists;
        this.ref = new OFDocumentReference(rnQueryDocSnap.ref);
        this.id = rnQueryDocSnap.id;
    }

    data(options?: OFSnapshotOptions | undefined): T {
        const rnData = this.rnQueryDocSnap.data();
        return rnData as T;
    }

    get(path: string, options?: OFSnapshotOptions | undefined): any {
        const rnValue = this.rnQueryDocSnap.get(path);
        return rnValue;
    }
}