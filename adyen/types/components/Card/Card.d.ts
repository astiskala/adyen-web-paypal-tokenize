import { h } from 'preact';
import { UIElement } from '../UIElement';
import { CardElementData, CardElementProps, BinLookupResponse } from './types';
import { CbObjOnBinLookup } from '../internal/SecuredFields/lib/types';
export declare class CardElement extends UIElement<CardElementProps> {
    static type: string;
    protected static defaultProps: {
        onBinLookup: () => void;
    };
    formatProps(props: CardElementProps): {
        type: string;
        countryCode: any;
        configuration: {
            socialSecurityNumberMode: import("./types").SocialSecurityMode;
            koreanAuthenticationRequired?: boolean;
            icon?: string;
            brandsConfiguration?: import("./types").CardBrandsConfiguration;
        };
        brandsConfiguration: import("./types").CardBrandsConfiguration;
        icon: string;
        groupTypes: string[];
        holderNameRequired: boolean;
        hasCVC: boolean;
        billingAddressRequired: any;
        brand?: string;
        brands?: string[];
        enableStoreDetails?: boolean;
        hideCVC?: boolean;
        hasHolderName?: boolean;
        onLoad?: (event: import("../internal/SecuredFields/lib/types").CbObjOnLoad) => void;
        onConfigSuccess?: (event: import("../internal/SecuredFields/lib/types").CbObjOnConfigSuccess) => void;
        onFieldValid?: (event: import("../internal/SecuredFields/lib/types").CbObjOnFieldValid) => void;
        onBrand?: (event: import("../internal/SecuredFields/lib/types").CbObjOnBrand) => void;
        onError?: (event: import("../internal/SecuredFields/lib/types").CbObjOnError) => void;
        onFocus?: (event: import("../internal/SecuredFields/lib/types").CbObjOnFocus) => void;
        onBinValue?: (event: import("../internal/SecuredFields/lib/types").CbObjOnBinValue) => void;
        onBinLookup?: (event: CbObjOnBinLookup) => void;
        onChange?: (state: any, element: UIElement<any>) => void;
        onValid?: (state: any, element: UIElement<any>) => void;
        onSubmit?: (state: any, element: UIElement<any>) => void;
        onComplete?: (state: any, element: UIElement<any>) => void;
        onAdditionalDetails?: (state: any, element: UIElement<any>) => void;
        setStatusAutomatically?: boolean;
        name?: string;
        amount?: import("../../types").PaymentAmount;
        showPayButton?: boolean;
        payButton?: (options: any) => any;
        loadingContext?: string;
        createFromAction?: (action: import("../../types").PaymentAction, props: object) => UIElement<any>;
        clientKey?: string;
        elementRef?: any;
        i18n?: import("../../language").default;
        _parentInstance?: import("../../core/core").default;
        order?: import("../../types").Order;
        modules?: {
            analytics: import("../../core/Analytics/Analytics").default;
            risk: import("../../core/RiskModule").default;
        };
        isDropin?: boolean;
    };
    /**
     * Formats the component data output
     */
    formatData(): CardElementData;
    updateStyles(stylesObj: any): this;
    setFocusOn(fieldName: any): this;
    onBrand: (event: any) => void;
    processBinLookupResponse(binLookupResponse: BinLookupResponse, isReset?: boolean): this;
    handleUnsupportedCard(errObj: any): this;
    onBinLookup(obj: CbObjOnBinLookup): void;
    onBinValue: (callbackObj: import("../internal/SecuredFields/lib/types").CbObjOnBinValue) => void;
    get isValid(): boolean;
    get icon(): any;
    get brands(): {
        icon: any;
        name: string;
    }[];
    get brand(): string;
    get displayName(): string;
    get accessibleName(): string;
    get browserInfo(): import("../../types").BrowserInfo;
    render(): h.JSX.Element;
}
export default CardElement;
