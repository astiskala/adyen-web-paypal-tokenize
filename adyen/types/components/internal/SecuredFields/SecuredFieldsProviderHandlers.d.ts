import { CbObjOnError, CbObjOnFocus, CbObjOnBrand, CbObjOnAllValid, CbObjOnFieldValid, CbObjOnAutoComplete, CbObjOnConfigSuccess, CbObjOnLoad } from './lib/types';
/**
 * Emits the onConfigSuccess (ready) event
 * Here we can assume CSF is loaded and ready to be used
 */
declare function handleOnLoad(cbObj: CbObjOnLoad): void;
/**
 * Emits the onConfigSuccess (ready) event
 * Here we can assume CSF is loaded, configured and ready to be used
 */
declare function handleOnConfigSuccess(cbObj: CbObjOnConfigSuccess): void;
/**
 * Emits the onAllValid event
 */
declare function handleOnAllValid(status: CbObjOnAllValid): boolean;
/**
 * Saves a field value from CSF in the CardInput state
 * Emits the onFieldValid event
 */
declare function handleOnFieldValid(field: CbObjOnFieldValid): boolean;
/**
 * Saves the card brand in state
 * Emits the onBrand event
 */
declare function handleOnBrand(cardInfo: CbObjOnBrand): void;
/**
 * Handles validation errors
 */
declare function handleOnError(cbObj: CbObjOnError, hasUnsupportedCard?: boolean): boolean;
declare function handleFocus(cbObj: CbObjOnFocus): void;
declare function handleOnAutoComplete(cbObj: CbObjOnAutoComplete): void;
/**
 * Handles cases where no secured fields are necessary (one click payments without CVC)
 * Automatically resolves with a valid state
 */
declare function handleOnNoDataRequired(): void;
declare const _default: {
    handleFocus: typeof handleFocus;
    handleOnAllValid: typeof handleOnAllValid;
    handleOnAutoComplete: typeof handleOnAutoComplete;
    handleOnFieldValid: typeof handleOnFieldValid;
    handleOnLoad: typeof handleOnLoad;
    handleOnConfigSuccess: typeof handleOnConfigSuccess;
    handleOnBrand: typeof handleOnBrand;
    handleOnError: typeof handleOnError;
    handleOnNoDataRequired: typeof handleOnNoDataRequired;
};
export default _default;
