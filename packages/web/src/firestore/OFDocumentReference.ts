import firebase from 'firebase/app';
import 'firebase/firestore';
import { ICollectionReference, IDocumentReference, IDocumentSnapshot, OFDocumentData, OFFirestoreError, OFGetOptions } from "@omnifire/api";
import OFCollectionReference from './OFCollectionReference';
import { toOFDocumentSnapshot } from './utils';

export default class OFDocumentReference<T = OFDocumentData> implements IDocumentReference<T> {

    id: string;

    private readonly webDocRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;

    constructor(webDocRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>) {
        this.webDocRef = webDocRef;
        this.id = webDocRef.id;
    }
    
    collection(path: string): ICollectionReference<OFDocumentData> {
        const webColRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData> = this.webDocRef.collection(path);
        return new OFCollectionReference(webColRef);
    }

    async get(options?: OFGetOptions | undefined): Promise<IDocumentSnapshot<T>> {
        const webDocSnap: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = await this.webDocRef.get(options);
        return toOFDocumentSnapshot(webDocSnap);
    }

    async set(data: T): Promise<void> {
        await this.webDocRef.set(data);
    }

    async delete(): Promise<void> {
        await this.webDocRef.delete();
    };

    onSnapshot(
        onNext: (snapshot: IDocumentSnapshot<T>) => void,
        onError?: ((error: OFFirestoreError) => void) | undefined,
        onCompletion?: (() => void) | undefined): () => void {
        
        return this.webDocRef.onSnapshot((snap) => {
            onNext(toOFDocumentSnapshot(snap));
        }, onError, onCompletion);
    };

}