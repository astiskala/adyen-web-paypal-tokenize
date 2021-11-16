import { h } from 'preact';
import UIElement, { UIElementProps } from '../UIElement';
export interface QRLoaderContainerProps extends UIElementProps {
    /**
     * Number of miliseconds that the component will wait in between status calls
     */
    delay?: number;
    /**
     * Number of minutes that the component should keep on loading
     */
    countdownTime?: number;
    type?: string;
    brandLogo?: string;
    buttonLabel?: string;
    shouldRedirectOnMobile?: boolean;
    qrCodeImage?: string;
    paymentData?: string;
    instructions?: string;
}
declare class QRLoaderContainer<T extends QRLoaderContainerProps = QRLoaderContainerProps> extends UIElement<T> {
    protected static defaultProps: {
        qrCodeImage: string;
        amount: any;
        paymentData: any;
        onError: () => void;
        onComplete: () => void;
    };
    formatData(): {
        paymentMethod: any;
    };
    get isValid(): boolean;
    renderQRCode(): h.JSX.Element;
    render(): h.JSX.Element;
}
export default QRLoaderContainer;
