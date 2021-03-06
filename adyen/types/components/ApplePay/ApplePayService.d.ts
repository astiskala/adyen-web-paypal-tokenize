/// <reference types="applepayjs" />
interface ApplePayServiceOptions {
    version: number;
    onValidateMerchant: (resolve: any, reject: any, url: any) => void;
    onCancel?: (event: ApplePayJS.Event) => void;
    onPaymentMethodSelected?: (resolve: any, reject: any, event: ApplePayJS.ApplePayPaymentMethodSelectedEvent) => void;
    onShippingMethodSelected?: (resolve: any, reject: any, event: ApplePayJS.ApplePayShippingMethodSelectedEvent) => void;
    onShippingContactSelected?: (resolve: any, reject: any, event: ApplePayJS.ApplePayShippingContactSelectedEvent) => void;
    onPaymentAuthorized?: any;
}
declare class ApplePayService {
    private session;
    constructor(paymentRequest: ApplePayJS.ApplePayPaymentRequest, options: ApplePayServiceOptions);
    /**
     * Begins the merchant validation process.
     * When this method is called, the payment sheet is presented and the merchant validation process is initiated.
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778001-begin}
     */
    begin(): void;
    /**
     * An event handler that is called when the payment sheet is displayed.
     * Use this attribute to request and return a merchant session.
     * @param event - An ApplePayValidateMerchantEvent object (contains validationURL)
     * @param onValidateMerchant - A promise implemented by the merchant that will resolve with the merchantSession
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/providing_merchant_validation}
     */
    onvalidatemerchant(event: ApplePayJS.ApplePayValidateMerchantEvent, onValidateMerchant: any): void;
    /**
     * An event handler that is called when the user has authorized the Apple Pay payment with Touch ID, Face ID, or passcode.
     * The onpaymentauthorized function must complete the payment and respond by calling completePayment before the 30 second timeout.
     * @param event - The event parameter contains the payment (ApplePayPayment) attribute.
     * @param onPaymentAuthorized - A promise that will complete the payment when resolved. Use this promise to process the payment.
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778020-onpaymentauthorized}
     */
    onpaymentauthorized(event: ApplePayJS.ApplePayPaymentAuthorizedEvent, onPaymentAuthorized: any): Promise<void>;
    /**
     * An event handler that is called when a new payment method is selected.
     * The onpaymentmethodselected function must resolve before the 30 second timeout
     * @param event - The event parameter contains the payment (ApplePayPayment) attribute.
     * @param onPaymentMethodSelected - A promise that will complete the payment when resolved. Use this promise to process the payment.
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778013-onpaymentmethodselected}
     */
    onpaymentmethodselected(event: ApplePayJS.ApplePayPaymentMethodSelectedEvent, onPaymentMethodSelected: any): Promise<void>;
    /**
     * An event handler that is called when a new payment method is selected.
     * The onpaymentmethodselected function must resolve before the 30 second timeout
     * @param event - The event parameter contains the shippingContact attribute.
     * @param onShippingContactSelected - A promise that will complete the selection of a shipping contact with an update.
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778009-onshippingcontactselected}
     */
    onshippingcontactselected(event: ApplePayJS.ApplePayShippingContactSelectedEvent, onShippingContactSelected: any): Promise<void>;
    /**
     * An event handler that is called when a new payment method is selected.
     * The onpaymentmethodselected function must resolve before the 30 second timeout
     * @param event - The event parameter contains the shippingMethod attribute.
     * @param onShippingMethodSelected - A promise that will complete the selection of a shipping method with an update.
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778009-onshippingcontactselected}
     */
    onshippingmethodselected(event: ApplePayJS.ApplePayShippingMethodSelectedEvent, onShippingMethodSelected: any): Promise<void>;
    /**
     * An event handler that is automatically called when the payment UI is dismissed.
     * This function can be called even after an onpaymentauthorized event has been dispatched.
     * @param event -
     * @param onCancel -
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778029-oncancel}
     */
    oncancel(event: ApplePayJS.Event, onCancel: any): any;
}
export default ApplePayService;
