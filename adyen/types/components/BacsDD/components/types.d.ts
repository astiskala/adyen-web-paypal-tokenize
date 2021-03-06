import { UIElementProps } from '../../UIElement';
export interface BacsInputData {
    holderName?: string;
    bankAccountNumber?: string;
    bankLocationId?: string;
    shopperEmail?: string;
}
export interface BacsInputProps extends UIElementProps {
    data?: BacsInputData;
    placeholders?: BacsInputData;
    onChange: (state: any) => void;
    onSubmit: () => void;
    onEdit: (e: any, revertToEnter: any) => void;
}
export interface BacsDataState {
    holderName?: string;
    bankAccountNumber?: string;
    bankLocationId?: string;
    shopperEmail?: string;
    amountConsentCheckbox?: boolean;
    accountConsentCheckbox?: boolean;
}
export interface ValidationObject {
    value: string;
    isValid: boolean;
    showError: boolean;
}
