import firebase from "firebase/app";
import 'firebase/storage';
import { IReference, IStorage } from "@omnifire/api";
import OFReference from "./OFReference";

export default class OFStorage implements IStorage {
    private readonly storage: firebase.storage.Storage;

    constructor() {
        this.storage = firebase.storage();
    }

    ref(path: string): IReference {
        const webRef: firebase.storage.Reference = this.storage.ref(path);
        return new OFReference(webRef);
    }

    refFromURL(url: string): IReference {
        const webRef: firebase.storage.Reference = this.storage.refFromURL(url);
        return new OFReference(webRef);
    }
}