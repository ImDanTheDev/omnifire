import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { IAuth, IUser, IUserCredential } from "@omnifire/api";

export default class OFAuth implements IAuth {

    private readonly auth: FirebaseAuthTypes.Module

    constructor() {
        this.auth = auth();
    }

    configureGoogle(webClientId?: string): void {
        GoogleSignin.configure({webClientId: webClientId});
    }

    onAuthStateChanged(listener: (user: IUser | null) => void): void {
        this.auth.onAuthStateChanged(listener);
    }

    async signInWithGoogle(): Promise<IUserCredential> {
        const googleUser = await GoogleSignin.signIn();
        const googleCred = auth.GoogleAuthProvider.credential(googleUser.idToken);
        const userCred = await this.auth.signInWithCredential(googleCred);

        return {
            user: userCred.user
        }
    }

    async signOut(): Promise<void> {
        await GoogleSignin.signOut();
        await this.auth.signOut();
    }

}