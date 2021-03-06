import { ValidationResult } from '../../components/internal/PersonalDetails/types';
export declare type FormState<DataState> = {
    schema: string[];
    data: DataState;
    errors: {
        [key: string]: ValidationResult;
    };
    valid: {
        [key: string]: boolean;
    };
};
export declare type DefaultDataState = {
    [key: string]: any;
};
