import { h } from 'preact';
import UIElement from '../UIElement';
/**
 * RedirectElement
 */
declare class RedirectElement extends UIElement {
    static type: string;
    static defaultProps: {
        type: string;
        showPayButton: boolean;
    };
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: any;
        };
    };
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): boolean;
    get icon(): any;
    render(): h.JSX.Element;
}
export default RedirectElement;
