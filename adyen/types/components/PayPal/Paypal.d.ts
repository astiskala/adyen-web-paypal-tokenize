import { h } from 'preact';
import UIElement from '../UIElement';
import { PaymentAction } from '../../types';
import { PayPalElementProps } from './types';
import './Paypal.scss';
declare class PaypalElement extends UIElement<PayPalElementProps> {
    static type: string;
    static subtype: string;
    protected static defaultProps: PayPalElementProps;
    private paymentData;
    private resolve;
    private reject;
    constructor(props: PayPalElementProps);
    protected formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    protected formatData(): {
        paymentMethod: {
            type: string;
            subtype: string;
        };
    };
    handleAction(action: PaymentAction): any;
    updateWithAction(action: PaymentAction): any;
    /**
     * Dropin Validation
     *
     * @remarks
     * Paypal does not require any specific Dropin validation
     */
    get isValid(): boolean;
    handleCancel(data: any): void;
    handleComplete(details: any): void;
    handleError(data: any): void;
    handleResolve(token: string): void;
    handleReject(errorMessage: string): void;
    startPayment(): Promise<never>;
    handleSubmit(): Promise<unknown>;
    submit(): void;
    render(): h.JSX.Element;
}
export default PaypalElement;
