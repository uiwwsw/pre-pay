import { UserInfo } from "#/user/domain";
import { User } from "firebase/auth";
import {
    createContext,
    useContext,
} from "react";
export interface FirebaseState {
    userInfo?: UserInfo | null;
    user?: User | null;
}
export const FirebaseContext = createContext<FirebaseState>({
    userInfo: undefined,
    user: undefined
});

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};
