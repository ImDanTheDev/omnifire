import IReference from "./IReference";

export default interface IStorage {
    ref: (path: string) => IReference;
    refFromURL: (url: string) => IReference;
}