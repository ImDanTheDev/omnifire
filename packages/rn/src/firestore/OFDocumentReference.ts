import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ICollectionReference, IDocumentReference, IDocumentSnapshot, OFDocumentData, OFFirestoreError, OFGetOptions } from "@omnifire/api";
import OFCollectionReference from './OFCollectionReference';
import { toOFDocumentSnapshot } from './utils';

export default class OFDocumentReference<T = OFDocumentData> implements IDocumentReference<T> {
    id: string;

    private readonly rnDocRef: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnDocRef: FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>) {
        this.rnDocRef = rnDocRef;
        this.id = rnDocRef.id;
    }

    collection(path: string): ICollectionReference<OFDocumentData> {
        const rnColRef = this.rnDocRef.collection(path);
        return new OFCollectionReference(rnColRef);
    }

    async get(options?: OFGetOptions | undefined): Promise<IDocumentSnapshot<T>> {
        const rnDocSnap = await this.rnDocRef.get(options);
        return toOFDocumentSnapshot(rnDocSnap);
    }

    async set(data: T): Promise<void> {
        await this.rnDocRef.set(data);
    }

    async delete(): Promise<void> {
        await this.rnDocRef.delete();
    };

    onSnapshot(
        onNext: (snapshot: IDocumentSnapshot<T>) => void,
        onError?: ((error: OFFirestoreError) => void) | undefined,
        onCompletion?: (() => void) | undefined): () => void {
        const unsubscribe = this.rnDocRef.onSnapshot((rnDocSnap) => {
            onNext(toOFDocumentSnapshot(rnDocSnap));
        }, (rnErr: Error) => {
            onError?.({
                code: (rnErr as any).code,
                message: rnErr.message,
                name: rnErr.name
            });
        }, onCompletion);
        return unsubscribe;
    }
}