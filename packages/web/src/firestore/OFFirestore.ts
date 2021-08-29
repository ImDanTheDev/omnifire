import firebase from 'firebase/app';
import 'firebase/firestore';
import { IFirestore, OFDocumentData } from '@omnifire/api';
import OFCollectionReference from './OFCollectionReference';

export default class OFFirestore implements IFirestore {

    private readonly firestore: firebase.firestore.Firestore;

    constructor() {
        this.firestore = firebase.firestore();
    }

    collection(path: string): OFCollectionReference<OFDocumentData> {
        const colRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData> = this.firestore.collection(path);

        return new OFCollectionReference(colRef);
    }
}