export default interface OFStorageError {
    serverResponse: string | null;
    code: string;
    message: string;
    name: string;
    stack?: string;
}