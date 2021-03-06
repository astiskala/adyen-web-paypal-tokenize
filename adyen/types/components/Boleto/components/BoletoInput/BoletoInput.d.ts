import { h } from 'preact';
declare function BoletoInput(props: any): h.JSX.Element;
declare namespace BoletoInput {
    var defaultProps: {
        data: {};
        showEmailAddress: boolean;
        personalDetailsRequired: boolean;
        billingAddressRequired: boolean;
    };
}
export default BoletoInput;
