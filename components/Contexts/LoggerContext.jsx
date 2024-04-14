import { createContext, useState } from "react";

const LoggerContext = createContext();
export default LoggerContext;

const dummyLoggers = [
    { id: 1, title: 'Logger1', fields: [{ fieldName: "name", fieldType: 'Text' }, { fieldName: "description", fieldType: 'Large Text' }, { fieldName: "Radio", fieldType: 'Radio', options: ['hi', 'hello'] }, { fieldName: "Multiple Select", fieldType: 'Multiple Select', options: ['hi', 'hello'] }, { fieldName: "Date Time", fieldType: 'Date Time' }, { fieldName: "Date", fieldType: 'Date' }, { fieldName: "Time", fieldType: 'Time' }, { fieldName: "Checkbox", fieldType: 'Checkbox' }, { fieldName: "Key Value Pair", fieldType: 'Key Value Pair' }, { fieldName: "Options", fieldType: 'Options', options: ['hi', 'hello'] }] },
    { id: 2, title: 'Logger2', fields: [{ fieldName: "check", fieldType: 'Checkbox' }, { fieldName: "date", fieldType: 'Date' }] },
]
let id = 3;
const dummyLogger = { title: '', fields: [] };
export const LoggerContextProvider = ({ children }) => {

    const [loggers, setLoggers] = useState(dummyLoggers);
    const [logger, setLogger] = useState(dummyLogger);
    const [fields, setFields] = useState([]);
    const [field, setField] = useState({});


    function addLogger(logger) {
        setLoggers((prev) => [...prev, { ...logger, id: id++ }]);
        setLogger(dummyLogger);
    }

    function updateLogger(updatedLogger) {
        setLoggers((prev) => [...prev.map((logger) => logger.id === updatedLogger.id ? updatedLogger : logger)]);
        setLogger(dummyLogger);
    }

    function addField(field) {
        if (field.fieldName && field.fieldType) {
            setFields((prev) => [...prev, field]);
            setField({});
            // setFields((prev) => ({ ...prev, fields: [...prev.fields, field] }));
        }
    }

    function updateField(updatedField, index) {
        setFields((prev) => [...prev.map((field, i) => i === index ? updatedField : field)]);
        setField({});
        // setLogger((prev) => ({ ...prev, fields: prev.fields.map((oldField, index) => index === updating ? updatedField : oldField) }));
    }

    function deleteField(index) {
        setFields((prev) => [...prev.filter((_, i) => i !== index)]);
    }

    const contextDate = {
        loggers, setLoggers,
        addLogger, updateLogger,
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