import { UserInfo } from "#/userInfo/domain";
import {
    createContext,
    useContext,
} from "react";
export interface FirebaseState {
    userInfo?: UserInfo | null;
    uid?: string | null;
}
export const FirebaseContext = createContext<FirebaseState>({
    userInfo: undefined,
    uid: null
});

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};
