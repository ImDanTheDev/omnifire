import storage, {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IReference, IStorage } from "@omnifire/api";
import OFReference from './OFReference';

export default class OFStorage implements IStorage {

    private readonly rnStorage: FirebaseStorageTypes.Module;

    constructor() {
        this.rnStorage = storage();
    }

    ref(path: string): IReference {
        const rnRef: FirebaseStorageTypes.Reference = this.rnStorage.ref(path);
        return new OFReference(rnRef);
    }

    refFromURL(url: string): IReference {
        const rnRef: FirebaseStorageTypes.Reference = this.rnStorage.refFromURL(url);
        return new OFReference(rnRef);
    }
}