import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { IDocumentChange, IQueryDocumentSnapshot, IQuerySnapshot, OFDocumentData, OFSnapshotListenOptions } from "@omnifire/api";
import OFDocumentChange from './OFDocumentChange';
import OFQueryDocumentSnapshot from './OFQueryDocumentSnapshot';

export default class OFQuerySnapshot<T = OFDocumentData> implements IQuerySnapshot<T> {

    docs: IQueryDocumentSnapshot<T>[];
    size: number;

    private readonly rnQuerySnap: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnQuerySnap: FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>) {
        this.rnQuerySnap = rnQuerySnap;
        this.docs = rnQuerySnap.docs.map((rnQueryDocSnap) => {
            return new OFQueryDocumentSnapshot(rnQueryDocSnap);
        });
        this.size = rnQuerySnap.size;
    }

    docChanges(options?: OFSnapshotListenOptions | undefined): IDocumentChange<T>[] {
        const rnDocChanges = this.rnQuerySnap.docChanges(options);
        return rnDocChanges.map((rnDocChange) => new OFDocumentChange(rnDocChange));
    }

    forEach(callback: (result: IQueryDocumentSnapshot<T>) => void, thisArg?: any): void {
        this.rnQuerySnap.forEach((rnQueryDocSnap) => {
            callback(new OFQueryDocumentSnapshot(rnQueryDocSnap));
        });
    }


}