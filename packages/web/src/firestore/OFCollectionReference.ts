import firebase from 'firebase';
import { ICollectionReference, IDocumentReference, IQuery, IQuerySnapshot, OFDocumentData, OFFirestoreError, OFGetOptions, OFWhereFilterOps } from '@omnifire/api';
import { toOFDocumentReference, toOFQuery, toOFQuerySnapshot } from './utils';

export default class OFCollectionReference<T = OFDocumentData> implements ICollectionReference<T> {

    private readonly webColRef;

    constructor(webColRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>) {
        this.webColRef = webColRef;
    }

    doc(path?: string): IDocumentReference<T> {
        const webDocRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = this.webColRef.doc(path);
        return toOFDocumentReference(webDocRef);
    }

    async add(data: T): Promise<IDocumentReference<T>> {
        const webDocRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = await this.webColRef.add(data);
        throw toOFDocumentReference(webDocRef);
    }

    where(path: string, opStr: OFWhereFilterOps, value: any): IQuery<T> {
        const webQuery: firebase.firestore.Query<firebase.firestore.DocumentData> = this.webColRef.where(path, opStr, value);
        return toOFQuery(webQuery);
    };

    limit(limit: number): IQuery<T> {
        const webQuery: firebase.firestore.Query<firebase.firestore.DocumentData> = this.webColRef.limit(limit);
        return toOFQuery(webQuery);
    }

    async get(options?: OFGetOptions | undefined): Promise<IQuerySnapshot<T>> {
        const webQuerySnap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = await this.webColRef.get(options);
        return toOFQuerySnapshot(webQuerySnap);
    }

    onSnapshot(onNext: (snapshot: IQuerySnapshot<T>) => void, onError?: ((error: OFFirestoreError) => void) | undefined, onCompletion?: (() => void) | undefined): () => void {
        return this.webColRef.onSnapshot((snap) => {
            onNext(toOFQuerySnapshot(snap));
        }, onError,  onCompletion);
    }

}