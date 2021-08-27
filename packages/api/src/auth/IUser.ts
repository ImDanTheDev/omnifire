import IUserInfo from "./IUserInfo";

export default interface IUser extends IUserInfo {
    delete: () => Promise<void>;
    phoneNumber: string | null;
}