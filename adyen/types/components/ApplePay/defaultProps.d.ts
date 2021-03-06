declare const defaultProps: {
    amount: {
        currency: string;
        value: number;
    };
    /**
     * The merchant’s two-letter ISO 3166 country code.
     */
    countryCode: string;
    totalPriceStatus: string;
    totalPriceLabel: any;
    configuration: {
        merchantName: string;
        merchantId: string;
    };
    initiative: string;
    /**
     * https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916120-lineitems
     * A set of line items that explain recurring payments and additional charges and discounts.
     */
    lineItems: any;
    /**
     * https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916123-merchantcapabilities
     * The payment capabilities supported by the merchant.
     */
    merchantCapabilities: string[];
    /**
     * https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916121-shippingmethods
     * A list of available methods for shipping physical goods.
     */
    shippingMethods: any;
    /**
     * https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916128-shippingtype
     * An optional value that indicates how purchased items are to be shipped.
     */
    shippingType: any;
    /**
     * https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/2928612-supportedcountries
     * A list of two-character country codes you provide, used to limit payments to cards from specific countries.
     */
    supportedCountries: any;
    /**
     * https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentrequest/1916122-supportednetworks
     * The payment networks supported by the merchant.
     */
    supportedNetworks: string[];
    /**
     * The fields of billing information that you require from the user to process the transaction.
     */
    requiredBillingContactFields: any;
    /**
     * The fields of shipping information that you require from the user to fulfill the order.
     */
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
export default defaultProps;
