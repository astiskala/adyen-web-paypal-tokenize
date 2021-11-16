import { UIElementProps } from '../UIElement';
declare global {
    interface Window {
        Klarna: any;
        klarnaAsyncCallback: any;
    }
}
/** sdkData present in Klarna `action`objects. */
export declare type KlarnaSdkData = {
    /**
     * Klarna client_token
     * @see https://developers.klarna.com/documentation/klarna-payments/single-call-descriptions/create-session/
     * */
    client_token: string;
    /**
     * `payment_method_category` specifies which of Klarna’s customer offerings (e.g. Pay now, Pay later or Slice it)
     * that is being shown in the widget
     * @see https://developers.klarna.com/documentation/klarna-payments/single-call-descriptions/create-session/
     * */
    payment_method_category: string;
};
interface KlarnaPaymentsShared {
    sdkData: KlarnaSdkData;
    paymentData: string;
    paymentMethodType: string;
}
export interface KlarnaWidgetProps extends KlarnaPaymentsShared {
    onComplete: (detailsData: any) => void;
    onError: (error: any) => void;
}
export interface KlarnaPaymentsProps extends UIElementProps, KlarnaPaymentsShared {
    useKlarnaWidget: boolean;
}
export interface KlarnaWidgetAuthorizeResponse {
    approved: boolean;
    show_form: boolean;
    authorization_token: string;
    error?: any;
}
export {};
