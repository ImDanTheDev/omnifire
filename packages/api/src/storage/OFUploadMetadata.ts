import OFSettableMetadata from "./OFSettableMetadata";

export default interface OFUploadMetadata extends OFSettableMetadata {
    md5Hash?: string | null;
}