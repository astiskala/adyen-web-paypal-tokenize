declare type ValidatorMode = 'blur' | 'input';
export interface ValidatorRule {
    validate: (value: any, context?: any) => boolean;
    errorMessage?: string;
    modes: ValidatorMode[];
}
interface FieldData {
    key: string;
    value: string;
    mode?: ValidatorMode;
}
interface FieldContext {
    state: {
        [key: string]: any;
    };
}
export declare type ValidatorRules = {
    [field: string]: ValidatorRule | ValidatorRule[];
};
/**
 * Holds the result of a validation
 */
declare class ValidationRuleResult {
    private readonly shouldValidate;
    isValid: boolean;
    errorMessage: string;
    constructor(rule: any, value: any, mode: any, context: any);
    /**
     * Whether the validation is considered an error.
     * A field is only considered to be an error if the validation rule applies to the current mode.
     */
    hasError(): boolean;
}
declare class ValidationResult {
    private validationResults;
    constructor(results: ValidationRuleResult[]);
    /** Checks if all validation rules have passed */
    get isValid(): boolean;
    /** Checks if any validation rule returned an error */
    hasError(): boolean;
    /** Returns the first validation result that returned an error */
    getError(): ValidationRuleResult;
    /** Returns all validation results that returned an error */
    getAllErrors(): ValidationRuleResult[];
}
declare class Validator {
    rules: ValidatorRules;
    constructor(rules?: {});
    setRules(newRules: any): void;
    /**
     * Get all validation rules for a field
     */
    private getRulesFor;
    /**
     * Validates a field
     */
    validate({ key, value, mode }: FieldData, context?: FieldContext): ValidationResult;
}
export default Validator;
