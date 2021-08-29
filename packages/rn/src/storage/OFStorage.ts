import {FirebaseStorageTypes} from '@react-native-firebase/storage';
import { IReference, IStorage } from "@omnifire/api";
import OFReference from './OFReference';

export default class OFStorage implements IStorage {

    private readonly rnStorage: FirebaseStorageTypes.Module;

    constructor(rnStorage: FirebaseStorageTypes.Module) {
        this.rnStorage = rnStorage;
    }

    ref(path: string): IReference {
        const rnRef: FirebaseStorageTypes.Reference = this.rnStorage.ref(path);
        return new OFReference(rnRef);
    }
}