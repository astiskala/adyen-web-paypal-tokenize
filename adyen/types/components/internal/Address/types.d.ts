import { AddressField, AddressData } from '../../../types';
import Specifications from './Specifications';
import { ValidatorRules } from '../../../utils/Validator/Validator';
export interface AddressProps {
    allowedCountries?: string[];
    countryCode?: string;
    data?: object;
    label?: string;
    onChange: (newState: any) => void;
    requiredFields?: string[];
    ref?: any;
    specifications?: AddressSpecifications;
    validationRules?: ValidatorRules;
    visibility?: string;
}
export interface AddressStateError {
    street?: boolean;
    houseNumberOrName?: boolean;
    postalCode?: boolean;
    city?: boolean;
    country?: boolean;
    stateOrProvince?: boolean;
}
export interface FieldContainerProps {
    allowedCountries: string[];
    classNameModifiers: string[];
    data: AddressData;
    errors: AddressStateError;
    fieldName: string;
    key: string;
    valid?: object;
    onInput?: (e: Event) => void;
    onChange?: (e: Event) => void;
    onDropdownChange: (e: Event) => void;
    readOnly?: boolean;
    specifications: Specifications;
}
export interface ReadOnlyAddressProps {
    data: AddressData;
    label: string;
}
export interface CountryFieldProps {
    allowedCountries: string[];
    classNameModifiers: string[];
    label: string;
    errorMessage: boolean | string;
    onDropdownChange: (e: Event) => void;
    readOnly?: boolean;
    value: string;
}
export interface CountryFieldItem {
    id: string;
    name: string;
}
export interface StateFieldProps {
    classNameModifiers: string[];
    label: string;
    errorMessage: boolean | string;
    onDropdownChange: (e: Event) => void;
    readOnly?: boolean;
    selectedCountry: string;
    specifications: Specifications;
    value: string;
}
export interface StateFieldItem {
    id: string;
    name: string;
}
declare type AddressFieldsGroup = [AddressField, number][];
export declare type AddressSchema = (AddressField | AddressFieldsGroup)[];
export interface AddressSpecifications {
    [key: string]: {
        hasDataset?: boolean;
        labels?: {
            [key: string]: string;
        };
        optionalFields?: AddressField[];
        placeholders?: {
            [key: string]: string;
        };
        schema?: AddressSchema;
    };
}
export {};
