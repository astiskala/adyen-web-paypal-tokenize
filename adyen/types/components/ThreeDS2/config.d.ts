import { ThreeDS2FlowObject } from './types';
export declare const DEFAULT_CHALLENGE_WINDOW_SIZE = "02";
export declare const THREEDS_METHOD_TIMEOUT = 10000;
export declare const CHALLENGE_TIMEOUT = 600000;
export declare const UNKNOWN_CHALLENGE_RESOLVE_OBJECT: ThreeDS2FlowObject;
export declare const UNKNOWN_CHALLENGE_RESOLVE_OBJECT_TIMEOUT: ThreeDS2FlowObject;
export declare const FAILED_METHOD_STATUS_RESOLVE_OBJECT: ThreeDS2FlowObject;
export declare const FAILED_METHOD_STATUS_RESOLVE_OBJECT_TIMEOUT: ThreeDS2FlowObject;
export declare const ERRORS: {
    TIME_OUT: string;
    WRONG_ORIGIN: string;
    HTML_ELEMENT: string;
    WRONG_DATA_TYPE: string;
    MISSING_PROPERTY: string;
    UNKNOWN: string;
};
export declare const ERROR_MESSAGES: {
    timeout: string;
    wrongOrigin: string;
    HTMLElementError: string;
    wrongDataType: string;
    missingProperty: string;
    unknownError: string;
};
export declare const CHALLENGE_WINDOW_SIZES: {
    '01': string[];
    '02': string[];
    '03': string[];
    '04': string[];
    '05': string[];
};
