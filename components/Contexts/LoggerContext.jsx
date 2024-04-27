import { createContext, useEffect, useState } from "react";
import { Confirmation } from "../shared/Confirmation";
import firestore from '@react-native-firebase/firestore';
import { Alert, ToastAndroid } from "react-native";

const LoggerContext = createContext();
export default LoggerContext;


let id = 3;
const dummyLogger = { title: '', fields: [] };
export const LoggerContextProvider = ({ children }) => {

    const [loggers, setLoggers] = useState([]);
    const [logger, setLogger] = useState(dummyLogger);
    const [fields, setFields] = useState([]);
    const [field, setField] = useState({});

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('loggers')
            .onSnapshot(querySnapshot => {
                const _loggers = [];
                querySnapshot.forEach((logger) => {
                    _loggers.push({ id: logger.id, ...logger.data() });
                });
                setLoggers(_loggers); // Set loggers here
            }, error => {
                console.error("Error fetching loggers: ", error);
            });

        return () => unsubscribe();
    }, []);


    function addLogger(logger) {
        firestore().collection('loggers').add(logger);
    }

    function updateLogger(updatedLogger) {
        firestore().collection('loggers').doc(updatedLogger.id).update(updatedLogger);
    }

    async function deleteLogger(id) {
        const status = await Confirmation('Delete Logger', 'Are you sure?');
        if (status) {
            firestore().collection('loggers').doc(id).delete();
        }
    }

    function addField(field) {
        if (field.fieldName && field.fieldType) {
            setFields((prev) => [...prev, field]);
            setField({});
        }
    }

    function updateField(updatedField, index) {
        setFields((prev) => [...prev.map((field, i) => i === index ? updatedField : field)]);
        setField({});
    }

    function deleteField(index) {
        setFields((prev) => [...prev.filter((_, i) => i !== index)]);
    }

    const contextDate = {
        loggers, setLoggers,
        addLogger, updateLogger, deleteLogger,
        logger, setLogger,
        fields, setFields, addField, updateField, deleteField,
        field, setField
    };

    return (
        <LoggerContext.Provider value={contextDate}>
            {children}
        </LoggerContext.Provider>
    );
}