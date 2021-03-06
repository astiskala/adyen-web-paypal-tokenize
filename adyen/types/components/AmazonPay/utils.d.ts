import { AmazonPayButtonSettings, ChargeAmount, PayloadJSON, Region, SupportedLocale } from './types';
import { PaymentAmount } from '../../types';
/**
 * Returns the AmazonPay script URL for passed region.
 * @param region - Two-letter country code in ISO 3166 format
 * @returns the AmazonPay script URL
 */
export declare function getAmazonPayUrl(region: Region): string;
/**
 * Returns the AmazonPay button settings object
 * @param props -
 * @returns the AmazonPay button settings
 */
export declare function getAmazonPaySettings(props: any): AmazonPayButtonSettings;
/**
 * Returns the fallback locale for passed region.
 * @param region - Two-letter country code in ISO 3166 format
 * @returns A fallback locale
 */
export declare function getFallbackLocale(region: Region): SupportedLocale;
/**
 * Returns an array of supported locales for passed region.
 * @param region - Two-letter country code in ISO 3166 format
 * @returns An array of supported locales
 */
export declare function getSupportedLocales(region: Region): SupportedLocale[];
/**
 * Gets a locale and matches it with one of the supported locales for the given region.
 * If there's no match, it will return the region's fallback option.
 * @param locale - Locale to be processed
 * @param region - Two-letter country code in ISO 3166 format
 * @returns A supported locale
 */
export declare function getCheckoutLocale(locale: string, region: Region): SupportedLocale;
/**
 * Gets the design code from the given alias.
 * @param design - The alias of one of the possible designs.
 * @returns A design code
 */
export declare function getDesignCode(design: string): string;
/**
 * Returns the amount in the format Amazon expects.
 * @param amount - The amount object in the Adyen format
 * @returns the charge amount object in the Amazon format
 */
export declare function getChargeAmount(amount: PaymentAmount): ChargeAmount;
/**
 * Returns a PayloadJSON object.
 * @param props -
 * @returns PayloadJSON
 */
export declare function getPayloadJSON(props: any): PayloadJSON;
