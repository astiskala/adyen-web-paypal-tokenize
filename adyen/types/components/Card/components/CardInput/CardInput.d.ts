import { h } from 'preact';
import './CardInput.scss';
import { CardInputProps } from './types';
declare function CardInput(props: CardInputProps): h.JSX.Element;
declare namespace CardInput {
    var defaultProps: {
        details: any[];
        type: string;
        hasHolderName: boolean;
        holderNameRequired: boolean;
        enableStoreDetails: boolean;
        hideCVC: boolean;
        hasCVC: boolean;
        hasStoreDetails: boolean;
        storedDetails: any;
        showBrandIcon: boolean;
        positionHolderNameOnTop: boolean;
        billingAddressRequired: boolean;
        billingAddressRequiredFields: string[];
        installmentOptions: {};
        configuration: {
            koreanAuthenticationRequired: boolean;
            socialSecurityNumberMode: import("../../types").SocialSecurityMode;
        };
        onLoad: () => any;
        onConfigSuccess: () => any;
        onAllValid: () => any;
        onFieldValid: () => any;
        onBrand: () => any;
        onError: () => any;
        onBinValue: () => any;
        onBlur: () => any;
        onFocus: () => any;
        onChange: () => any;
        data: {
            billingAddress: {};
        };
        styles: {};
        placeholders: {};
    };
}
export default CardInput;
