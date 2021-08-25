import firebase from "@react-native-firebase/app";
import { IFirebase } from "@omnifire/api";

export default class OFFirebase implements IFirebase {
    
    initializeApp(config?: any): void {
        // Default app is automatically created by react-native-firebase.
        // firebase.initializeApp is only used to create multiple firebase
        // app instances.
        // This is currently not supported in @Omnifire/rn.
        throw new Error('initializeApp is not supported in @Omnifire/rn.');
    };
}