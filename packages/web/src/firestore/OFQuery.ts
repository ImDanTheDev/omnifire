import firebase from "firebase/app";
import 'firebase/firestore';
import { IQuery, IQuerySnapshot, OFDocumentData, OFFirestoreError, OFGetOptions, OFWhereFilterOps } from "@omnifire/api";
import OFQuerySnapshot from "./OFQuerySnapshot";

export default class OFQuery<T = OFDocumentData> implements IQuery<T> {

    private readonly webQuery;

    constructor(webQuery: firebase.firestore.Query<firebase.firestore.DocumentData>) {
        this.webQuery = webQuery;
    }

    async get(options?: OFGetOptions | undefined): Promise<IQuerySnapshot<T>> {
        const webQuerySnap: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = await this.webQuery.get(options);
        return new OFQuerySnapshot(webQuerySnap);
    };

    where(path: string, opStr: OFWhereFilterOps, value: any): IQuery<T> {
        const nextWebQuery: firebase.firestore.Query<firebase.firestore.DocumentData> = this.webQuery.where(path, opStr, value);
        return new OFQuery(nextWebQuery);
    }

    limit(limit: number): IQuery<T> {
        const nextWebQuery:firebase.firestore.Query<firebase.firestore.DocumentData> = this.webQuery.limit(limit);
        return new OFQuery(nextWebQuery);
    }

    onSnapshot(
        onNext: (snapshot: IQuerySnapshot<T>) => void,
        onError?: ((error: OFFirestoreError) => void) | undefined,
        onCompletion?: (() => void) | undefined): () => void {
        
        return this.webQuery.onSnapshot((snap) => {
            onNext(new OFQuerySnapshot(snap));
        }, onError, onCompletion);
    }

}