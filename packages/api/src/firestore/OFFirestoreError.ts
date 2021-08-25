export default interface OFFirestoreError {
    code: string;
    message: string;
    name: string;
    stack?: string;
}