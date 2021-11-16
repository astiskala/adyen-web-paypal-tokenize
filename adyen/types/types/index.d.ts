import paymentMethods from '../components';
import { ADDRESS_SCHEMA } from '../components/internal/Address/constants';
import actionTypes from '../core/ProcessResponse/PaymentAction/actionTypes';
export declare type PaymentActionsType = keyof typeof actionTypes;
/**
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v51/payments__resParam_action API Explorer /payments action}
 */
export interface PaymentAction {
    /**
     * General type of action that needs to be taken by the client
     */
    type: PaymentActionsType | string;
    /**
     * Refinement of type of action that needs to be taken by the client (currently only applies to the new 'threeDS2' type)
     */
    subtype?: string;
    /**
     * Specifies the payment method.
     */
    paymentMethodType: string;
    /**
     * When non-empty, contains a value that you must submit to the /payments/details endpoint. In some cases, required for polling.
     */
    paymentData?: string;
    authorisationToken?: string;
    /**
     * Specifies the HTTP method, for example GET or POST.
     */
    method?: string;
    /**
     * Specifies the URL to redirect to.
     */
    url?: string;
    alternativeReference?: string;
    downloadUrl?: string;
    entity?: string;
    expiresAt?: string;
    instructionsUrl?: string;
    issuer?: string;
    maskedTelephoneNumber?: string;
    merchantName?: string;
    merchantReference?: string;
    reference?: string;
    shopperEmail?: string;
    shopperName?: string;
    qrCodeData?: string;
    /**
     * A token to pass to the 3DS2 Component to get the fingerprint/challenge.
     */
    token?: string;
    /**
     * An object containing data to be used in external SDKs like PayPal Buttons SDK.
     */
    sdkData?: {
        [key: string]: any;
    };
}
export interface PaymentMethod {
    /**
     * The unique payment method code.
     */
    type: string;
    /**
     * The displayable name of this payment method.
     */
    name: string;
    /**
     * All input details to be provided to complete the payment with this payment method.
     */
    details?: object;
    /**
     * Configuration props as set by the merchant in the CA and received in the PM object in the /paymentMethods response
     */
    configuration?: object;
}
export interface StoredPaymentMethod extends PaymentMethod {
    /**
     * The supported shopper interactions for this stored payment method.
     */
    supportedShopperInteractions: string[];
    /**
     * A unique identifier of this stored payment method.
     */
    storedPaymentMethodId?: string;
}
/**
 * List of the available payment methods
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v51/paymentMethods API Explorer /paymentMethods}.
 */
export interface PaymentMethodsResponseInterface {
    /**
     * Detailed list of payment methods required to generate payment forms.
     */
    paymentMethods: PaymentMethod[];
    /**
     * List of all stored payment methods.
     */
    storedPaymentMethods: StoredPaymentMethod[];
}
export interface PaymentResponse {
    type: string;
    resultCode: string;
    url?: string;
}
export interface ProcessedResponse {
    type: string;
    props?: object;
}
/**
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v52/payments__reqParam_amount API Explorer /payments amount}
 */
export interface PaymentAmount {
    value: number;
    currency: string;
}
export declare type AddressField = typeof ADDRESS_SCHEMA[number];
export declare type AddressData = {
    [key in AddressField]?: string;
};
export interface PersonalDetailsSchema {
    firstName?: string;
    lastName?: string;
    gender?: string;
    dateOfBirth?: string;
    shopperEmail?: string;
    telephoneNumber?: string;
}
export interface Order {
    /**
     * The encrypted order data.
     */
    orderData: string;
    /**
     * The pspReference that belongs to the order.
     */
    pspReference: string;
}
export interface OrderStatus {
    expiresAt: string;
    paymentMethods: {
        lastFour: string;
        type: string;
    }[];
    pspReference: string;
    reference: string;
    remainingAmount: PaymentAmount;
}
/**
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v52/post/payments__reqParam_browserInfo API Explorer /payments browserInfo}
 */
export interface BrowserInfo {
    acceptHeader: string;
    colorDepth: string;
    language: string;
    javaEnabled: boolean;
    screenHeight: string;
    screenWidth: string;
    userAgent: string;
    timeZoneOffset: number;
}
/**
 * Available components
 */
export declare type PaymentMethods = typeof paymentMethods;
/**
 * Options for a component
 */
export declare type PaymentMethodOptions<P extends keyof PaymentMethods> = InstanceType<PaymentMethods[P]>['props'];
/**
 * Visibility options for a fieldset
 */
export declare type FieldsetVisibility = 'editable' | 'hidden' | 'readOnly';