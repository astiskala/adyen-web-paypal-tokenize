import { h } from 'preact';
import BaseElement, { BaseElementProps } from './BaseElement';
import { PaymentAction, PaymentAmount } from '../types';
export interface UIElementProps extends BaseElementProps {
    onChange?: (state: any, element: UIElement) => void;
    onValid?: (state: any, element: UIElement) => void;
    onSubmit?: (state: any, element: UIElement) => void;
    onComplete?: (state: any, element: UIElement) => void;
    onAdditionalDetails?: (state: any, element: UIElement) => void;
    onError?: (error: any, element?: UIElement) => void;
    /** Automatically set status through the payment flow */
    setStatusAutomatically?: boolean;
    type?: string;
    name?: string;
    icon?: string;
    amount?: PaymentAmount;
    /**
     * Show/Hide pay button
     * @defaultValue true
     */
    showPayButton?: boolean;
}
export declare class UIElement<P extends UIElementProps = any> extends BaseElement<P> {
    protected componentRef: any;
    elementRef: any;
    constructor(props: P);
    setState(newState: object): void;
    onChange(): object;
    onValid(): {
        data: any;
    };
    startPayment(): Promise<any>;
    submit(): void;
    onComplete(state: any): void;
    showValidation(): this;
    setStatus(status: any): this;
    handleAction(action: PaymentAction, props?: {}): UIElement<any>;
    get isValid(): boolean;
    /**
     * Get the element icon URL for the current environment
     */
    get icon(): string;
    /**
     * Get the element displayable name
     */
    get displayName(): string;
    /**
     * Get the element accessible name, used in the aria-label of the button that controls selected payment method
     */
    get accessibleName(): string;
    /**
     * Return the type of an element
     */
    get type(): string;
    payButton: (props: any) => h.JSX.Element;
}
export default UIElement;
