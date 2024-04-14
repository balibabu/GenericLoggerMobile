const dummyLoggers = [
    { id: 1, title: 'Logger1', fields: [{ fieldName: "name", fieldType: 'Text' }, { fieldName: "description", fieldType: 'Large Text' }, { fieldName: "Radio", fieldType: 'Radio', options: ['hi', 'hello'] }, { fieldName: "Multiple Select", fieldType: 'Multiple Select', options: ['hi', 'hello'] }, { fieldName: "Date Time", fieldType: 'Date Time' }, { fieldName: "Date", fieldType: 'Date' }, { fieldName: "Time", fieldType: 'Time' }, { fieldName: "Checkbox", fieldType: 'Checkbox' }, { fieldName: "Key Value Pair", fieldType: 'Key Value Pair' }, { fieldName: "Options", fieldType: 'Options', options: ['hi', 'hello'] }] },
    { id: 2, title: 'Logger2', fields: [{ fieldName: "check", fieldType: 'Checkbox' }, { fieldName: "date", fieldType: 'Date' }] },
]

// during testing purpose only
let loggerId = 2;
let logId = 0;


export default genericAppArchi = {
    models: {
        loggers: [...dummyLoggers],
        logs: {}
    },
}

