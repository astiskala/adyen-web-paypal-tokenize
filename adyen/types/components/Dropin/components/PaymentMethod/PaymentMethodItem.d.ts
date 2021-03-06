import { Component, h } from 'preact';
import './PaymentMethodItem.scss';
import UIElement from '../../../UIElement';
interface PaymentMethodItemProps {
    paymentMethod: UIElement;
    isSelected: boolean;
    isLoaded: boolean;
    isLoading: boolean;
    isDisabling: boolean;
    showRemovePaymentMethodButton: boolean;
    onDisableStoredPaymentMethod: (paymentMethod: any) => void;
    onSelect: () => void;
    standalone: boolean;
    className?: string;
}
declare class PaymentMethodItem extends Component<PaymentMethodItemProps> {
    static defaultProps: {
        paymentMethod: any;
        isSelected: boolean;
        isLoaded: boolean;
        isLoading: boolean;
        showDisableStoredPaymentMethodConfirmation: boolean;
        onSelect: () => void;
    };
    state: {
        showDisableStoredPaymentMethodConfirmation: boolean;
    };
    isMouseDown: boolean;
    onFocus: () => void;
    onClick: () => void;
    onMouseDown: () => void;
    onMouseUp: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleDisableConfirmation: () => void;
    onDisableStoredPaymentMethod: () => void;
    render({ paymentMethod, isSelected, isDisabling, isLoaded, isLoading, onSelect, standalone }: {
        paymentMethod: any;
        isSelected: any;
        isDisabling: any;
        isLoaded: any;
        isLoading: any;
        onSelect: any;
        standalone: any;
    }, { activeBrand }: {
        activeBrand?: any;
    }): h.JSX.Element;
}
export default PaymentMethodItem;
