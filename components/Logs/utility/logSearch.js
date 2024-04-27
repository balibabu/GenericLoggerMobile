export default function logSearch(key, log, logger) {
    if (key.trim()) {
        for(const field of logger.fields){
            const value=JSON.stringify(log[field.fieldName]);
            if(value && value.toLocaleLowerCase().includes(key.toLocaleLowerCase())){
                return true;
            }
        }
        // for (const entry of Object.values(log)) {
        //     const value = JSON.stringify(entry);
        //     if (value.includes(key)) {
        //         return true;
        //     }
        // }
        return false;
    }
    return true;
}
