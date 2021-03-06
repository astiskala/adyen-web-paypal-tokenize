import { Component } from 'preact';
import { SFPProps } from './defaultProps';
import { StylesObject, CbObjOnError } from './lib/types';
import { AddressData } from '../../../types';
import { BinLookupResponse } from '../../Card/types';
import { CVCPolicyType } from './lib/core/AbstractSecuredField';
export interface SFPState {
    status?: string;
    brand?: string;
    errors?: object;
    valid: object;
    data: object;
    cvcPolicy?: CVCPolicyType;
    isSfpValid?: boolean;
    autoCompleteName?: string;
    billingAddress?: AddressData;
    hasUnsupportedCard?: boolean;
    hasKoreanFields?: boolean;
    showSocialSecurityNumber?: boolean;
    hideDateForBrand?: boolean;
    socialSecurityNumber?: string;
}
export interface SingleBrandResetObject {
    brand: string;
    cvcPolicy: CVCPolicyType;
}
/**
 * SecuredFieldsProvider:
 * Initialises & handles the client-side part of SecuredFields
 */
declare class SecuredFieldsProvider extends Component<SFPProps, SFPState> {
    private originKeyErrorTimeout;
    private originKeyTimeoutMS;
    private numCharsInCVC;
    private rootNode;
    private numDateFields;
    private csf;
    private handleOnLoad;
    private handleOnConfigSuccess;
    private handleOnFieldValid;
    private handleOnAllValid;
    private handleOnBrand;
    private handleFocus;
    private handleOnError;
    private handleOnAutoComplete;
    private handleOnNoDataRequired;
    state: SFPState;
    props: any;
    private issuingCountryCode;
    constructor(props: SFPProps);
    static defaultProps: {
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
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    private initializeCSF;
    private checkForKCPFields;
    getChildContext(): object;
    handleUnsupportedCard(errObj: CbObjOnError): boolean;
    setFocusOn(frame: string): void;
    updateStyles(stylesObj: StylesObject): void;
    destroy(): void;
    showValidation(): void;
    /**
     * Map SF errors to ValidationRuleResult like objects, for CardInput component
     */
    mapErrorsToValidationRuleResult(): object;
    processBinLookupResponse(binLookupResponse: BinLookupResponse, resetObject: SingleBrandResetObject): void;
    private setRootNode;
    render(props: any, state: any): any;
}
export default SecuredFieldsProvider;
