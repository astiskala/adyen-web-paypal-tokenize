import { ValidatorRules } from '../Validator/Validator';
import { DefaultDataState } from './types';
declare function useForm<DataState = DefaultDataState>(props: {
    rules?: ValidatorRules;
    [key: string]: any;
}): {
    handleChangeFor: (key: any, mode?: string) => (e: any) => void;
    triggerValidation: () => void;
    setSchema: (schema: any) => void;
    setData: (key: any, value: any) => void;
    setValid: (key: any, value: any) => void;
    setErrors: (key: any, value: any) => void;
    isValid: boolean;
    schema: string[];
    valid: {
        [key: string]: boolean;
    };
    errors: {
        [key: string]: import("../../components/internal/PersonalDetails/types").ValidationResult;
    };
    data: DataState;
};
export default useForm;
