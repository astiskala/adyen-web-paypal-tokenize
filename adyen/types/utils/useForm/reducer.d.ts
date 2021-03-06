/**
 * Processes default data and sets as default in state
 */
export declare function init({ schema, defaultData, processField }: {
    schema: any;
    defaultData: any;
    processField: any;
}): {
    schema: any;
    data: any;
    valid: any;
    errors: any;
};
export declare function getReducer(processField: any): (state: any, { type, key, value, mode, defaultData, schema }: any) => any;
