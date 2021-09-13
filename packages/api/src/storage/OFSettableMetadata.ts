export default interface OFSettableMetadata {
    contentEncoding?: string | null;
    contentType?: string | null;
    contentDisposition?: string;
    customMetadata?: {
        [key: string]: string;
    } | null;
}