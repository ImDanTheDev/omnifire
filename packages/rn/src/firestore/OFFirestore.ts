import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ICollectionReference, IFirestore, OFDocumentData } from "@omnifire/api";
import OFCollectionReference from './OFCollectionReference';

export default class OFFirestore implements IFirestore {

    private readonly firestore: FirebaseFirestoreTypes.Module;

    constructor() {
        this.firestore = firestore();
    }
    
    collection(path: string): ICollectionReference<OFDocumentData> {
        const rnColRef: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData> = this.firestore.collection(path);
        return new OFCollectionReference(rnColRef);
    }
}