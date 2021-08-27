export default interface IAuthCredential {
    providerId: string;
    token?: string;
    secret?: string;
    signInMethod?: string;
}