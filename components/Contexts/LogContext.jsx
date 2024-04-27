import { createContext, useEffect, useState } from "react";
import { Confirmation } from "../shared/Confirmation";
import firestore from '@react-native-firebase/firestore';

const LogContext = createContext();
export default LogContext;


export const LogContextProvider = ({ children }) => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('logs')
            .onSnapshot(querySnapshot => {
                const _logs = [];
                querySnapshot.forEach((log) => {
                    _logs.push({ id: log.id, ...log.data() });
                });
                setLogs(_logs); // Set loggers here
            }, error => {
                console.error("Error fetching loggers: ", error);
            });

        return () => unsubscribe();
    }, []);


    function getLogs(loggerId) {
        const _logs = logs.filter((log) => log.loggerId === loggerId);
        return _logs;
    }

    function addLog(loggerId, log) {
        firestore().collection('logs').add({ loggerId, ...log });
    }

    function updateLog(updatedLog) {
        firestore().collection('logs').doc(updatedLog.id).update(updatedLog);
    }

    async function deleteLog(logId) {
        const status = await Confirmation('Delete Logger', 'Are you sure?');
        if (status) {
            firestore().collection('logs').doc(logId).delete();
        }
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