import { PaymentMethod, StoredPaymentMethod, Order, OrderStatus } from '../../types';
import UIElement, { UIElementProps } from '../UIElement';
import { PaymentMethodsConfiguration } from '../../core/types';
export interface DropinElementProps extends UIElementProps {
    /**
     * Configure each payment method displayed on the Drop-in
     */
    paymentMethodsConfiguration?: PaymentMethodsConfiguration;
    paymentMethods?: PaymentMethod[];
    storedPaymentMethods?: StoredPaymentMethod[];
    order?: Order;
    /**
     * Show/Hide stored payment methods
     * @defaultValue true
     */
    showStoredPaymentMethods?: boolean;
    /**
     * Show/Hide regular (non-stored) payment methods
     * @defaultValue true
     */
    showPaymentMethods?: boolean;
    openFirstStoredPaymentMethod?: boolean;
    openFirstPaymentMethod?: boolean;
    onSubmit?: (data: any, component: any) => void;
    onReady?: () => void;
    onSelect?: (paymentMethod: any) => void;
    /**
     * Show/Hide the remove payment method button on stored payment methods
     * Requires {@link DropinElementProps.onDisableStoredPaymentMethod}
     * @defaultValue false
     */
    showRemovePaymentMethodButton?: boolean;
    /**
     * Called when a shopper clicks Remove on a stored payment method
     * Use this to call the {@link https://docs.adyen.com/api-explorer/#/Recurring/v49/post/disable /disable endpoint}
     * Call resolve() if the removal was successful, or call reject() if there was an error
     * @defaultValue false
     */
    onDisableStoredPaymentMethod?: (storedPaymentMethod: any, resolve: any, reject: any) => void;
}
export interface DropinComponentProps extends DropinElementProps {
    onCreateElements: any;
    onChange: (newState?: object) => void;
    onOrderCancel?: (order: Order) => void;
}
interface DropinStatus {
    type: 'loading' | 'ready' | 'success' | 'error';
}
export interface DropinComponentState {
    elements: any[];
    status: DropinStatus;
    activePaymentMethod: UIElement;
    cachedPaymentMethods: object;
    isDisabling: boolean;
    orderStatus: OrderStatus;
}
export {};
