import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ICollectionReference, IDocumentReference, IQuery, IQuerySnapshot, OFDocumentData, OFFirestoreError, OFGetOptions, OFWhereFilterOps } from "@omnifire/api";
import OFQuery from './OFQuery';
import OFQuerySnapshot from './OFQuerySnapshot';
import { toOFDocumentReference, toOFQuery, toOFQuerySnapshot } from './utils';

export default class OFCollectionReference<T = OFDocumentData> implements ICollectionReference<T> {

    private readonly rnColRef: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnColRef: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>) {
        this.rnColRef = rnColRef;
    }

    doc(path?: string | undefined): IDocumentReference<T> {
        const rnDocRef = this.rnColRef.doc(path);
        return toOFDocumentReference(rnDocRef);
    }

    async add(data: T): Promise<IDocumentReference<T>> {
        const rnDocRef = await this.rnColRef.add(data);
        return toOFDocumentReference(rnDocRef);
    }

    where(path: string, opStr: OFWhereFilterOps, value: any): IQuery<T> {
        const rnQuery = this.rnColRef.where(path, opStr, value);
        return toOFQuery(rnQuery);
    }

    limit(limit: number): IQuery<T> {
        const webQuery = this.rnColRef.limit(limit);
        return toOFQuery(webQuery);
    }

    async get(options?: OFGetOptions | undefined): Promise<IQuerySnapshot<T>> {
        const rnQuerySnap = await this.rnColRef.get(options);
        return toOFQuerySnapshot(rnQuerySnap);
    }

    onSnapshot(onNext: (snapshot: IQuerySnapshot<T>) => void, onError?: ((error: OFFirestoreError) => void) | undefined, onCompletion?: (() => void) | undefined): () => void {
        return this.rnColRef.onSnapshot((snap) => {
            onNext(toOFQuerySnapshot(snap));
        }, (rnErr) => {
            onError?.({
                code: (rnErr as any).code,
                message: rnErr.message,
                name: rnErr.name
            })
        },  onCompletion);
    }

}