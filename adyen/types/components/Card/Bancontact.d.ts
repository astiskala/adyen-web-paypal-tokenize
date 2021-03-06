import { CardElement } from './Card';
import { CardElementProps } from './types';
declare class BancontactElement extends CardElement {
    constructor(props: CardElementProps);
    /**
     * Now that the Bancontact (BCMC) Card component can accept a number dual branded with Visa (which requires a CVC) it has to be handled differently
     * at creation time (no automatic removing of the CVC securedField).
     * At the same time we can't treat it as a regular 'card' component - because it needs to hide the CVC field at at startup,
     * as well as show the BCMC logo in the number field and ignore any of the internal, regEx driven, brand detection.
     */
    formatProps(props: CardElementProps): {
        brands: string[];
        type: string;
        cvcPolicy: string;
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
        onBinLookup?: (event: import("../internal/SecuredFields/lib/types").CbObjOnBinLookup) => void;
        onChange?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onValid?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onSubmit?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onComplete?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        onAdditionalDetails?: (state: any, element: import("../UIElement").UIElement<any>) => void;
        setStatusAutomatically?: boolean;
        name?: string;
        amount?: import("../../types").PaymentAmount;
        showPayButton?: boolean;
        payButton?: (options: any) => any;
        loadingContext?: string;
        createFromAction?: (action: import("../../types").PaymentAction, props: object) => import("../UIElement").UIElement<any>;
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
    onBrand: (event: any) => void;
}
export default BancontactElement;
