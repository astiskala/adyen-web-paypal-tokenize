import { h } from 'preact';
import UIElement from '../UIElement';
import { ApplePayElementProps, ApplePayElementData } from './types';
declare class ApplePayElement extends UIElement<ApplePayElementProps> {
    protected static type: string;
    protected static defaultProps: {
        amount: {
            currency: string;
            value: number;
        };
        countryCode: string;
        totalPriceStatus: string;
        totalPriceLabel: any;
        configuration: {
            merchantName: string;
            merchantId: string;
        };
        initiative: string;
        lineItems: any;
        merchantCapabilities: string[];
        shippingMethods: any;
        shippingType: any;
        supportedCountries: any;
        supportedNetworks: string[];
        requiredBillingContactFields: any;
        requiredShippingContactFields: any;
        billingContact: any;
        shippingContact: any;
        applicationData: any;
        onClick: (resolve: any) => any;
        onSubmit: () => void;
        onError: () => void;
        onAuthorized: (resolve: any) => any;
        onPaymentMethodSelected: any;
        onShippingContactSelected: any;
        onShippingMethodSelected: any;
        buttonType: string;
        buttonColor: string;
        showPayButton: boolean;
    };
    constructor(props: any);
    /**
     * Formats the component props
     */
    protected formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    protected formatData(): ApplePayElementData;
    submit(): void;
    startPayment(): Promise<unknown>;
    private startSession;
    private validateMerchant;
    /**
     * Validation
     *
     * @remarks
     * Apple Pay does not require any specific validation
     */
    get isValid(): boolean;
    /**
     * Determine a shopper's ability to return a form of payment from Apple Pay.
     * @returns Promise Resolve/Reject whether the shopper can use Apple Pay
     */
    isAvailable(): Promise<boolean>;
    /**
     * Renders the Apple Pay button or nothing in the Dropin
     */
    render(): h.JSX.Element;
}
export default ApplePayElement;
