export default interface OFSettableMetadata {
    contentEncoding?: string | null;
    contentType?: string | null;
    customMetadata?: {
        [key: string]: string;
    } | null;
}