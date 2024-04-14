import { createContext, useState } from "react";

const LogContext = createContext();
export default LogContext;


let id = 0;

export const LogContextProvider = ({ children }) => {

    const [logs, setLogs] = useState({});

    function getLogs(loggerId) {
        const _logs = logs[loggerId] || [];
        return _logs;
    }

    function addLog(loggerId, log) {
        setLogs((prev) => {
            const oldLogs = prev[loggerId] || [];
            return {
                ...prev, loggerId: [...oldLogs, { ...log, id: id++ }]
            }
        });
    }

    const contextDate = {
        getLogs, addLog
    };

    return (
        <LogContext.Provider value={contextDate}>
            {children}
        </LogContext.Provider>
    );
}