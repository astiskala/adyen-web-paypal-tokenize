import Language from '../../../language/Language';
import { SFPlaceholdersObject } from './lib/core/AbstractSecuredField';
/**
 * Make an array of encrypted field names based on the value of the 'data-cse' attribute of elements in the rootNode
 */
export declare const getFields: (rootNode: any) => any;
/**
 * If, visually, we're dealing with a single date field (expiryDate) we still need separate entries
 * for expiryMonth & expiryYear - since that is how the values will be delivered from securedFields
 */
export declare const validFieldsReducer: (acc: any, cur: any) => any;
export declare const getErrorReducer: (numDateFields: any, state: any) => (acc: any, field: any) => any;
/**
 * Create an object suitable for sending to our handleOnError function
 */
export declare const getErrorObject: (fieldType: any, rootNode: any, state: any) => {
    rootNode: any;
    fieldType: any;
    error: any;
    type: string;
};
/**
 * Lookup translated values for the placeholders for the SecuredFields
 * and return an object with these mapped to the data-cse value of the SecuredField
 */
export declare const resolvePlaceholders: (i18n?: Language) => SFPlaceholdersObject;
/**
 * Used by SecuredFieldsProviderHandlers
 */
export declare const getCardImageUrl: (brand: any, loadingContext: any) => any;
/**
 * 'Destructures' properties from object - returns a new object only containing those properties that were asked for (including if those properties
 * have values that are falsy: null, undefined, false, '').
 *
 * @param args - property names to select: can be either 'regular' arguments (comma separated list) or an array
 * @returns - an object with a function 'from' that accepts a single argument - the object from which to choose properties.
 * This function returns a new object - a copy of the original but only including the desired properties
 *
 * @example const strippedObj = pick('cardType', 'securityCode').from(cardObject);
 * @example const strippedObj = pick(['cardType', 'securityCode']).from(cardObject);
 */
export declare function pick(...args: any[]): {
    from: (obj: any) => any;
};
/**
 *'Destructures' properties from object, returning a new object containing all the original objects properties except those that were specifically rejected
 *
 * @param args - property names to reject: can be either 'regular' arguments (comma separated list) or an array
 * @returns - an object with a function 'from' that accepts a single argument - the object from which to reject properties.
 * This function returns a new object - a copy of the original but excluding the selected properties
 *
 * @example const strippedObj = reject('permittedLengths', 'pattern', 'startingRules').from(cardObject);
 * @example const strippedObj = reject(['permittedLengths', 'pattern', 'startingRules']).from(cardObject);
 */
export declare function reject(...args: any[]): {
    from: (obj: any) => any;
};
