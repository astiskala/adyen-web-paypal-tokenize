import { h } from 'preact';
import { AddressProps } from './types';
declare function Address(props: AddressProps): h.JSX.Element;
declare namespace Address {
    var defaultProps: {
        countryCode: any;
        data: {};
        onChange: () => void;
        visibility: string;
        requiredFields: readonly ["street", "houseNumberOrName", "postalCode", "city", "stateOrProvince", "country"];
        specifications: {};
    };
}
export default Address;
