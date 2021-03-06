import { h } from 'preact';
import UIElement from '../UIElement';
import { CbObjOnBinLookup } from '../internal/SecuredFields/lib/types';
export declare class SecuredFieldsElement extends UIElement {
    static type: string;
    static analyticsType: string;
    protected static defaultProps: {
        onBinLookup: () => void;
        brandsConfiguration: {};
    };
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: any;
        browserInfo: import("../../types").BrowserInfo;
    };
    updateStyles(stylesObj: any): this;
    setFocusOn(frame: any): this;
    processBinLookupResponse(binLookupResponse: any): this;
    dualBrandingChangeHandler(e: Event | string): this;
    handleUnsupportedCard(errObj: any): this;
    onBinLookup(obj: CbObjOnBinLookup): void;
    onBinValue: (callbackObj: import("../internal/SecuredFields/lib/types").CbObjOnBinValue) => void;
    get isValid(): boolean;
    get icon(): any;
    get browserInfo(): import("../../types").BrowserInfo;
    render(): h.JSX.Element;
}
export default SecuredFieldsElement;
