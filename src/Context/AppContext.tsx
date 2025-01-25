import { createContext, ReactNode } from "react";
import { services } from "../assets/assets";


interface AppContextValue {
    services: typeof services;
}


export const AppContext = createContext<AppContextValue | undefined>(undefined);

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const value: AppContextValue = { services };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

