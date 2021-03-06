import { h } from 'preact';
import UIElement from '../UIElement';
import { DragonpayElementProps } from './types';
export declare class DragonpayElement extends UIElement<DragonpayElementProps> {
    static type: string;
    get isValid(): boolean;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: string;
            issuer: any;
        };
        shopperEmail: any;
    };
    protected formatProps(props: DragonpayElementProps): {
        issuers: any;
        type?: string;
        details?: any;
        loadingContext?: string;
        reference?: string;
        i18n?: import("../../language").default;
        onChange?: (state: any, element: UIElement<any>) => void;
        onValid?: (state: any, element: UIElement<any>) => void;
        onSubmit?: (state: any, element: UIElement<any>) => void;
        onComplete?: (state: any, element: UIElement<any>) => void;
        onAdditionalDetails?: (state: any, element: UIElement<any>) => void;
        onError?: (error: any, element?: UIElement<any>) => void;
        setStatusAutomatically?: boolean;
        name?: string;
        icon?: string;
        amount?: import("../../types").PaymentAmount;
        showPayButton?: boolean;
        payButton?: (options: any) => any;
        createFromAction?: (action: import("../../types").PaymentAction, props: object) => UIElement<any>;
        clientKey?: string;
        elementRef?: any;
        _parentInstance?: import("../../core/core").default;
        order?: import("../../types").Order;
        modules?: {
            analytics: import("../../core/Analytics/Analytics").default;
            risk: import("../../core/RiskModule").default;
        };
        isDropin?: boolean; /**
         * Formats the component data output
         */
    };
    render(): h.JSX.Element;
}
export default DragonpayElement;
