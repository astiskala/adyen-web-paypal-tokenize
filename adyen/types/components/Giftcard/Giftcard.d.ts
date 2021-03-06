import { h } from 'preact';
import UIElement from '../UIElement';
export declare class GiftcardElement extends UIElement {
    static type: string;
    protected static defaultProps: {
        brandsConfiguration: {};
    };
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: any;
            brand: any;
            encryptedCardNumber: any;
            encryptedSecurityCode: any;
        };
    };
    get isValid(): boolean;
    get icon(): any;
    get displayName(): any;
    onBalanceCheck: () => false | void | Promise<void>;
    onOrderRequest: (data: any) => Promise<void>;
    payButton: (props: any) => h.JSX.Element;
    render(): h.JSX.Element;
}
export default GiftcardElement;
