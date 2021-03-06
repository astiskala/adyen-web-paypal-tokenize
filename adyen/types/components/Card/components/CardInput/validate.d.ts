import { ValidatorRules } from '../../../../utils/Validator/Validator';
import { formatCPFCNPJ } from '../../../internal/SocialSecurityNumberBrazil/utils';
export declare const cardInputFormatters: {
    socialSecurityNumber: typeof formatCPFCNPJ;
};
export declare const cardInputValidationRules: ValidatorRules;
export declare const getRuleByNameAndMode: (name: any, mode: any) => any;
