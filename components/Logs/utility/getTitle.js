export default function getTitle(logger, log) {
    const fieldName=getFieldName(logger);
    if (fieldName.text) {
        const title=log[fieldName.text] || ' ';
        return title.trim();
    }
    if (fieldName.textarea) {
        const title=log[fieldName.textarea] || ' ';
        return title.trim().split('\n')[0];
    }
    return log['id']
}

function getFieldName(logger) {
    const fields = logger.fields;
    const fieldName = {};

    for (const field of fields) {
        const type = field.fieldType.trim().toLowerCase();
        if (type === 'text') {
            fieldName.text = field.fieldName;
            break;
        } else if (type === 'large text') {
            fieldName.textarea = field.fieldName;
            break;
        }
    }
    return fieldName;
}