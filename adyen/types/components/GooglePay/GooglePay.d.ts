/// <reference types="googlepay" />
import { h } from 'preact';
import UIElement from '../UIElement';
import GooglePayService from './GooglePayService';
import { GooglePayProps } from './types';
declare class GooglePay extends UIElement<GooglePayProps> {
    static type: string;
    static defaultProps: {
        environment: string;
        existingPaymentMethodRequired: boolean;
        buttonColor: google.payments.api.ButtonColor;
        buttonType: google.payments.api.ButtonType;
        buttonSizeMode: any;
        showPayButton: boolean;
        configuration: {
            gatewayMerchantId: string;
            merchantId: string;
            merchantName: string;
        };
        amount: {
            value: number;
            currency: string;
        };
        countryCode: string;
        totalPriceStatus: google.payments.api.TotalPriceStatus;
        onError: () => void;
        onAuthorized: (params: any) => any;
        onSubmit: () => void;
        onClick: (resolve: any) => any;
        allowedAuthMethods: google.payments.api.CardAuthMethod[];
        allowedCardNetworks: google.payments.api.CardNetwork[];
        allowCreditCards: boolean;
        allowPrepaidCards: boolean;
        billingAddressRequired: boolean;
        billingAddressParameters: any;
        emailRequired: boolean;
        shippingAddressRequired: boolean;
        shippingAddressParameters: any;
        shippingOptionRequired: boolean;
        shippingOptionParameters: any;
        paymentMethods: any[];
    };
    protected googlePay: GooglePayService;
    /**
     * Formats the component data input
     * For legacy support - maps configuration.merchantIdentifier to configuration.merchantId
     */
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: any;
        browserInfo: import("../../types").BrowserInfo;
    };
    loadPayment: () => Promise<void>;
    submit: () => Promise<void>;
    startPayment: () => Promise<void>;
    /**
     * Validation
     */
    get isValid(): boolean;
    /**
     * Determine a shopper's ability to return a form of payment from the Google Pay API.
     */
    isAvailable: () => Promise<boolean>;
    /**
     * Determine a shopper's ability to return a form of payment from the Google Pay API.
     */
    isReadyToPay: () => Promise<google.payments.api.IsReadyToPayResponse>;
    /**
     * Use this method to prefetch a PaymentDataRequest configuration to improve loadPaymentData execution time on later user interaction. No value is returned.
     */
    prefetch: () => void;
    get browserInfo(): import("../../types").BrowserInfo;
    get icon(): string;
    render(): h.JSX.Element;
}
export default GooglePay;
