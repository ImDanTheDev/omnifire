import firebase from "firebase/app";
import { IFirebase } from "@omnifire/api";

export default class OFFirebase implements IFirebase {
    
    webFirebaseApp?: firebase.app.App;

    initializeApp(config?: any): void {
        this.webFirebaseApp = firebase.initializeApp(config);
    };

}