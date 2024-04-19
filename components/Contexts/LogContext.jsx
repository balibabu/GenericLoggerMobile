import { createContext, useState } from "react";

const LogContext = createContext();
export default LogContext;


let id = 1;

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
                ...prev, [loggerId]: [...oldLogs, { ...log, id: id++ }]
            }
        });
    }

    function updateLog(loggerId, updatedLog) {
        setLogs((prev) => ({ ...prev, [loggerId]: prev[loggerId].map((log) => log.id === updatedLog.id ? updatedLog : log) }));
    }

    function deleteLog(loggerId, logId) {
        setLogs((prev) => ({ ...prev, [loggerId]: prev[loggerId].filter((log) => log.id !== logId) }));
    }

    const contextDate = {
        logs,
        getLogs, addLog, updateLog, deleteLog
    };

    return (
        <LogContext.Provider value={contextDate}>
            {children}
        </LogContext.Provider>
    );
}