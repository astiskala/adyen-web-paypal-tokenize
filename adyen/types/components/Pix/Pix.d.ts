import QRLoaderContainer from '../helpers/QRLoaderContainer';
import { h } from 'preact';
import { PixProps } from './types';
declare class PixElement extends QRLoaderContainer<PixProps> {
    static type: string;
    static defaultProps: {
        qrCodeImage: string;
        amount: any;
        paymentData: any;
        onError: () => void;
        onComplete: () => void;
        personalDetailsRequired: boolean;
    };
    get isValid(): boolean;
    formatProps(props: any): {
        personalDetailsRequired?: boolean;
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        shouldRedirectOnMobile?: boolean;
        qrCodeImage?: string;
        paymentData?: string;
        instructions?: string;
        onChange?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onValid?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onSubmit?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onComplete?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onAdditionalDetails?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onError?: (error: any, element?: import("../UIElement").UIElement<any>) => void;
        setStatusAutomatically?: boolean;
        name?: string;
        icon?: string;
        amount?: import("../../types").PaymentAmount;
        showPayButton?: boolean;
        payButton?: (options: any) => any;
        loadingContext?: string;
        createFromAction?: (action: import("../../types").PaymentAction, props: object) => import("../UIElement").UIElement<any>;
        clientKey?: string;
        elementRef?: any;
        i18n?: import("../../language").default;
        _parentInstance?: import("../../core/core").default;
        order?: import("../../types").Order;
        modules?: {
            analytics: import("../../core/Analytics/Analytics").default;
            risk: import("../../core/RiskModule").default;
        };
        isDropin?: boolean;
        copyBtn: boolean;
        introduction: string;
    };
    formatData(): {
        socialSecurityNumber: any;
        shopperName: {
            firstName: any;
            lastName: any;
        };
        paymentMethod: {
            type: any;
        };
    };
    render(): h.JSX.Element;
}
export default PixElement;
