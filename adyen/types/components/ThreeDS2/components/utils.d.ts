import { ChallengeData, ThreeDS2Token, FingerPrintData, ResultObject } from '../types';
export interface FingerprintResolveData {
    data: {
        [key: string]: string;
        paymentData: string;
    };
}
export interface ChallengeResolveData {
    data: {
        details: {
            [key: string]: string;
        };
    };
}
export interface ErrorObject {
    errorCode: string;
    message: string;
}
export declare const decodeAndParseToken: (token: string) => ThreeDS2Token;
/**
 * Performs JSON.stringify on passed object & and base64 encodes result
 * @param obj -
 * @returns encoded result
 */
export declare const encodeObject: (obj: any) => string;
/**
 * Accepts a size string for the challenge window & returns it if it is valid else returns a default value
 * @param sizeStr - the size string to check the validity of
 * @returns a valid size string
 */
export declare const validateChallengeWindowSize: (sizeStr: string) => string;
/**
 * Accepts a size string for the challenge window & returns the corresponding array of w/h values
 * @param sizeStr -
 */
export declare const getChallengeWindowSize: (sizeStr: string) => string[];
/**
 *  prepareChallengeData
 *
 *  Requires an object containing the challenge parameters:
 *  @param token - challengeToken string received from /submitThreeDS2Fingerprint, /details or /payments call: contains acsTransID, acsURL, messageVersion,
 *     threeDSNotificationURL and threeDSServerTransID
 *  @param size - one of five possible challenge window sizes
 */
export declare const prepareChallengeData: ({ token, size }: {
    token: any;
    size: any;
}) => ChallengeData;
/**
 *  prepareFingerPrintData
 *
 *  Requires an object containing the fingerprint parameters:
 *  @param token - fingerprintToken string received from /payments call: contains threeDSMethodNotificationURL, threeDSMethodUrl and
 *     threeDSServerTransID
 *  @param notificationURL - the URL that the final notification is expected to be postMessaged from.
 *
 *  NOTE: we don't expect merchants to alter the default by passing in a notificationURL of their own via props;
 *  and if 3DS2 is being done via createFromAction or handleAction we won't accept it.
 *  But if the merchant is using checkout.create('threeDS2DeviceFingerprint') we still support the fact that they might want to set their own
 *  notificationURL (aka threeDSMethodNotificationURL)
 */
export declare const prepareFingerPrintData: ({ token, notificationURL }: {
    token: any;
    notificationURL: any;
}) => FingerPrintData;
export declare const createFingerprintResolveData: (dataKey: string, resultObj: ResultObject, paymentData: string) => FingerprintResolveData;
export declare const createOldFingerprintResolveData: (dataKey: string, resultObj: ResultObject, paymentData: string) => any;
export declare const createChallengeResolveData: (dataKey: string, transStatus: string, authorisationToken: string) => ChallengeResolveData;
export declare const createOldChallengeResolveData: (dataKey: string, transStatus: string, authorisationToken: string) => any;
export declare const handleErrorCode: (errorCode: string) => ErrorObject;
/**
 *
 * Takes a string and encodes it as a base64url string
 * (https://en.wikipedia.org/wiki/Base64#URL_applications)
 * (See also https://tools.ietf.org/html/rfc7515)
 *
 * @example
 * ```
 * const jsonStr = JSON.stringify( {name:'john', surname:'smith'} );
 * const base64url = encodeBase64URL(jsonStr);
 * ```
 *
 * @param dataStr - data, as a string, to be encoded
 *
 * @returns base64URL - a base64url encoded string
 */
export declare const encodeBase64URL: (dataStr: string) => string;
/**
 * Add props specifically needed for the type of 3DS2 flow: fingerprint or challenge
 *
 * @param actionSubtype - 3DS2 flow type: fingerprint or challenge
 * @param props - object from which to extract particular properties
 */
export declare const get3DS2FlowProps: (actionSubtype: any, props: any) => any;
