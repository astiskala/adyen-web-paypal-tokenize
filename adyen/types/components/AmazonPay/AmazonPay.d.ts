import { h } from 'preact';
import UIElement from '../UIElement';
import { AmazonPayElementData, AmazonPayElementProps } from './types';
import './AmazonPay.scss';
export declare class AmazonPayElement extends UIElement<AmazonPayElementProps> {
    static type: string;
    protected static defaultProps: {
        cancelUrl: string;
        configuration: {};
        environment: string;
        locale: string;
        placement: string;
        productType: string;
        region: string;
        returnUrl: string;
        showOrderButton: boolean;
        showChangePaymentDetailsButton: boolean;
        showSignOutButton: boolean;
        showPayButton: boolean;
        onClick: (resolve: any) => any;
        onSignOut: (resolve: any) => any;
    };
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): AmazonPayElementData;
    getShopperDetails(): void | Promise<any>;
    handleDeclineFlow(): void;
    get isValid(): boolean;
    get browserInfo(): import("../../types").BrowserInfo;
    submit(): any;
    render(): h.JSX.Element;
}
export default AmazonPayElement;
