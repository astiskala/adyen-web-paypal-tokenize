/// <reference types="googlepay" />
declare const _default: {
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
export default _default;
