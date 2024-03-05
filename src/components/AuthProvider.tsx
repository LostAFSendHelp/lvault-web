import { useContext, createContext, ReactNode } from "react";

type User = {
    name: string,
    email: string | null
}

type Auth = {
    user: User | null
};

const AuthContext = createContext<Auth>({ user: null });

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    return <AuthContext.Provider value={{ user: null }}>{ children }</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
