import { h } from 'preact';
import './AchInput.scss';
declare function AchInput(props: any): h.JSX.Element;
declare namespace AchInput {
    var defaultProps: {
        details: any[];
        type: string;
        hasHolderName: boolean;
        holderNameRequired: boolean;
        billingAddressRequired: boolean;
        billingAddressAllowedCountries: string[];
        onLoad: () => void;
        onConfigSuccess: () => void;
        onAllValid: () => void;
        onFieldValid: () => void;
        onBrand: () => void;
        onError: () => void;
        onBinValue: () => void;
        onBlur: () => void;
        onFocus: () => void;
        onChange: () => void;
        holderName: string;
        data: {
            holderName: string;
            billingAddress: {};
        };
        styles: {};
        placeholders: {};
    };
}
export default AchInput;
