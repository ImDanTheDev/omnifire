import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { IQuery, IQuerySnapshot, OFDocumentData, OFFirestoreError, OFGetOptions, OFWhereFilterOps } from "@omnifire/api";
import OFQuerySnapshot from './OFQuerySnapshot';

export default class OFQuery<T = OFDocumentData> implements IQuery<T> {

    private readonly rnQuery: FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData>;

    constructor(rnQuery: FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData>) {
        this.rnQuery = rnQuery;
    }

    async get(options?: OFGetOptions | undefined): Promise<IQuerySnapshot<T>> {
        const rnQuerySnap = await this.rnQuery.get(options);
        return new OFQuerySnapshot(rnQuerySnap);
    }

    where(path: string, opStr: OFWhereFilterOps, value: any): IQuery<T> {
        const rnNextQuery = this.rnQuery.where(path, opStr, value);
        return new OFQuery(rnNextQuery);
    }

    limit(limit: number): IQuery<T> {
        const nextWebQuery = this.rnQuery.limit(limit);
        return new OFQuery(nextWebQuery);
    }

    onSnapshot(
        onNext: (snapshot: IQuerySnapshot<T>) => void,
        onError?: ((error: OFFirestoreError) => void) | undefined,
        onCompletion?: (() => void) | undefined): () => void {
        
        return this.rnQuery.onSnapshot((snap) => {
            onNext(new OFQuerySnapshot(snap));
        }, (rnErr) => {
            onError?.({
                code: (rnErr as any).code,
                message: rnErr.message,
                name: rnErr.name
            })
        }, onCompletion);
    }

}