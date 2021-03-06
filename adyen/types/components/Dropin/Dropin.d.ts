import { h } from 'preact';
import UIElement from '../UIElement';
import { PaymentAction } from '../../types';
import { DropinElementProps } from './types';
declare class DropinElement extends UIElement<DropinElementProps> {
    static type: string;
    protected static defaultProps: {
        isDropin: boolean;
        onReady: () => void;
        onComplete: () => void;
        onCancel: () => void;
        onError: () => void;
        onSelect: () => void;
        onDisableStoredPaymentMethod: any;
        onChange: () => void;
        onSubmit: () => void;
        onAdditionalDetails: () => void;
        amount: {};
        installmentOptions: {};
        paymentMethodsConfiguration: {};
        openFirstPaymentMethod: boolean;
        openFirstStoredPaymentMethod: boolean;
        showStoredPaymentMethods: boolean;
        showPaymentMethods: boolean;
        showRemoveStoredPaymentMethodButton: boolean;
        showPayButton: boolean;
    };
    dropinRef: any;
    constructor(props: any);
    get isValid(): boolean;
    showValidation(): this;
    setStatus(status: any, props?: {}): this;
    get activePaymentMethod(): any;
    get data(): any;
    /**
     * Calls the onSubmit event with the state of the activePaymentMethod
     */
    submit(): void;
    protected handleSubmit: () => false | void;
    /**
     * Creates the Drop-in elements
     */
    private handleCreate;
    handleAction(action: PaymentAction, props?: {}): any;
    closeActivePaymentMethod(): void;
    render(): h.JSX.Element;
}
export default DropinElement;
