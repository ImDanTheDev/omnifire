import IUser from "./IUser";
import IUserCredential from "./IUserCredential";

export default interface IAuth {
    configureGoogle: (webClientId?: string) => void;
    onAuthStateChanged: (listener: (user: IUser | null) => void) => void;
    signInWithGoogle: () => Promise<IUserCredential>;
    signOut: () => Promise<void>;
}