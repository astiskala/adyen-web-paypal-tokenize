import { h } from 'preact';
import UIElement from '../UIElement';
import { KlarnaPaymentsProps } from './types';
import { PaymentAction } from '../../types';
declare class KlarnaPayments extends UIElement<KlarnaPaymentsProps> {
    static type: string;
    protected static defaultProps: {
        useKlarnaWidget: boolean;
    };
    constructor(props: KlarnaPaymentsProps);
    get isValid(): boolean;
    protected formatData(): {
        paymentMethod: {
            subtype?: string;
            type: string;
        };
    };
    payButton: (props: any) => h.JSX.Element;
    updateWithAction(action: PaymentAction): void;
    render(): h.JSX.Element;
}
export default KlarnaPayments;
