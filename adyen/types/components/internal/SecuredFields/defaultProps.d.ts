import { Language } from '../../../language/Language';
export interface SFPProps {
    /**
     * CSF RELATED (±22)
     */
    allowedDOMAccess?: boolean;
    autoFocus?: boolean;
    brands?: string[];
    groupTypes?: string[];
    keypadFix?: boolean;
    loadingContext: string;
    onAllValid?: any;
    onAutoComplete?: any;
    onBinValue?: any;
    onBrand?: any;
    onConfigSuccess?: any;
    onError?: any;
    onFieldValid?: any;
    onFocus?: any;
    onLoad?: any;
    clientKey?: string;
    placeholders?: object;
    rootNode?: HTMLElement;
    showWarnings?: boolean;
    styles?: object;
    trimTrailingSeparator?: boolean;
    type: string;
    /**
     * SFP RELATED (6)
     */
    i18n: Language;
    koreanAuthenticationRequired: boolean;
    hasKoreanFields: boolean;
    onChange: any;
    render: any;
    legacyInputMode: boolean;
    minimumExpiryDate: string;
    /**
     * RELATED TO COMPS HIGHER UP THE RENDER CHAIN - Card, CardInput etc (±39)
     */
    amount: object;
    billingAddressAllowedCountries: string[];
    billingAddressRequired: boolean;
    billingAddressRequiredFields: string[];
    brand: string;
    createFromAction: () => {};
    cvcPolicy: string;
    data: object;
    details: object[];
    enableStoreDetails: boolean;
    environment: string;
    expiryMonth: string;
    expiryYear: string;
    hasCVC: boolean;
    hasHolderName: boolean;
    hideCVC: boolean;
    holderName: string;
    holderNameRequired: boolean;
    hasStoreDetails: boolean;
    id: string;
    installmentOptions: object;
    lastFour: string;
    locale: string;
    modules: object;
    name: string;
    onAdditionalDetails: () => {};
    onBlur: () => {};
    onSubmit: () => {};
    payButton: () => {};
    paymentMethods: object[];
    paymentMethodsResponse: object;
    risk: object;
    showBrandIcon: boolean;
    showPayButton: boolean;
    storedDetails: boolean;
    storedPaymentMethodId: string;
    storedPaymentMethods: object[];
    supportedShopperInteractions: string[];
}
declare const _default: {
    type: string;
    keypadFix: boolean;
    rootNode: any;
    loadingContext: any;
    groupTypes: any[];
    allowedDOMAccess: boolean;
    showWarnings: boolean;
    autoFocus: boolean;
    trimTrailingSeparator: boolean;
    onChange: () => void;
    onLoad: () => void;
    onConfigSuccess: () => void;
    onAllValid: () => void;
    onFieldValid: () => void;
    onBrand: () => void;
    onError: () => void;
    onBinValue: () => void;
    onFocus: () => void;
    onAutoComplete: () => void;
    placeholders: {};
    styles: {};
};
export default _default;
