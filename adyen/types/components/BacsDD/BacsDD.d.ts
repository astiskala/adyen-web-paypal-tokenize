import { h } from 'preact';
import UIElement from '../UIElement';
interface BacsElementData {
    paymentMethod: {
        type: string;
        holderName: string;
        bankAccountNumber: string;
        bankLocationId: string;
    };
    shopperEmail: string;
}
declare class BacsElement extends UIElement {
    static type: string;
    formatData(): BacsElementData;
    get isValid(): boolean;
    payButton: (props: any) => h.JSX.Element;
    render(): h.JSX.Element;
}
export default BacsElement;
