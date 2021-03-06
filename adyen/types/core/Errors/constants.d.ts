export declare const ERROR_MSG_CARD_TOO_OLD = "Card too old";
export declare const ERROR_MSG_CARD_TOO_FAR_IN_FUTURE = "Date too far in future";
export declare const ERROR_MSG_CARD_EXPIRES_TOO_SOON = "Your card expires before check out date";
export declare const ERROR_MSG_INCOMPLETE_FIELD = "incomplete field";
export declare const ERROR_MSG_LUHN_CHECK_FAILED = "luhn check failed";
export declare const ERROR_MSG_UNSUPPORTED_CARD_ENTERED = "Unsupported card entered";
export declare const ERROR_MSG_INVALID_FIELD = "field not valid";
export declare const ERROR_MSG_CLEARED = "error was cleared";
export declare const ERROR_MSG_MBWAY_EMAIL_INVALID = "Not valid email address";
export declare const ARIA_ERROR_SUFFIX = "-ariaError";
/**
 * Error Codes
 * @example error.va.sf-cc-num.01
 * =
 * error
 * .validation error
 * .field description
 * .error type (luhn check failed)]
 */
export declare const ERROR_CODES: {
    "incomplete field": string;
    "field not valid": string;
    "luhn check failed": string;
    "Card too old": string;
    "Date too far in future": string;
    "Your card expires before check out date": string;
    "Unsupported card entered": string;
};
export declare const DEFAULT_ERROR: string;
