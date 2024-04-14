import { createContext } from "react";
import { LoggerContextProvider } from "./LoggerContext";
import { LogContextProvider } from "./LogContext";

const CombinedContext = createContext();
export default CombinedContext;

export const CombinedContextProvider = ({ children }) => {
    return (
        <LoggerContextProvider>
            <LogContextProvider>
                <CombinedContext.Provider value={{}}>
                    {children}
                </CombinedContext.Provider>
            </LogContextProvider>
        </LoggerContextProvider>
    );
}