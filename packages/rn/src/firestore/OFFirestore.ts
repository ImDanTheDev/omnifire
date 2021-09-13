import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { ICollectionReference, IFirestore, OFDocumentData, OFFirestoreSettings } from "@omnifire/api";
import OFCollectionReference from './OFCollectionReference';

export default class OFFirestore implements IFirestore {

    private readonly firestore: FirebaseFirestoreTypes.Module;

    constructor() {
        this.firestore = firestore();
    }

    async settings(settings: OFFirestoreSettings): Promise<void> {
        await this.firestore.settings(settings);
    }
    
    collection(path: string): ICollectionReference<OFDocumentData> {
        const rnColRef: FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData> = this.firestore.collection(path);
        return new OFCollectionReference(rnColRef);
    }
}