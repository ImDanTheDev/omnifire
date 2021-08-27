import firebase from "firebase";
import { IAuth, IUser, IUserCredential } from "@omnifire/api";

export default class OFAuth implements IAuth {
    private readonly auth: firebase.auth.Auth;
    private authProvider?: firebase.auth.AuthProvider;

    constructor() {
        this.auth = firebase.auth();
    }

    configureGoogle(): void {
        this.authProvider = new firebase.auth.GoogleAuthProvider();
    }

    onAuthStateChanged(listener: (user: IUser | null) => void): void {
        this.auth.onAuthStateChanged(listener);
    }

    async signInWithGoogle(): Promise<IUserCredential> {
        if (!this.authProvider) {
            throw new Error('Auth provider is undefined. You must configure a provider first.');
        }

        const userCred = await this.auth.signInWithPopup(this.authProvider)
        return {
            user: userCred.user
        }
    }

    async signOut(): Promise<void> {
        await this.auth.signOut();
    }
}