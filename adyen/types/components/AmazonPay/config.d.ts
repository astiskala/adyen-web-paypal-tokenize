import { LedgerCurrencies } from './types';
declare const AMAZONPAY_GET_CHECKOUT_DETAILS_ENDPOINT = "v1/AmazonPayUtility/getCheckoutDetails";
declare const AMAZONPAY_SIGN_STRING_ENDPOINT = "v1/AmazonPayUtility/signString";
declare const AMAZONPAY_UPDATE_CHECKOUT_SESSION_ENDPOINT = "v1/AmazonPayUtility/updateCheckoutSession";
declare const AMAZONPAY_URL_EU = "https://static-eu.payments-amazon.com/checkout.js";
declare const AMAZONPAY_URL_US = "https://static-na.payments-amazon.com/checkout.js";
declare const FALLBACK_LOCALE_EU = "en_GB";
declare const FALLBACK_LOCALE_US = "en_US";
declare const LEDGER_CURRENCIES_PER_REGION: LedgerCurrencies;
declare const SUPPORTED_LOCALES_EU: readonly ["en_GB", "de_DE", "fr_FR", "it_IT", "es_ES"];
declare const SUPPORTED_LOCALES_US: readonly ["en_US"];
export { AMAZONPAY_GET_CHECKOUT_DETAILS_ENDPOINT, AMAZONPAY_SIGN_STRING_ENDPOINT, AMAZONPAY_UPDATE_CHECKOUT_SESSION_ENDPOINT, AMAZONPAY_URL_EU, AMAZONPAY_URL_US, FALLBACK_LOCALE_EU, FALLBACK_LOCALE_US, LEDGER_CURRENCIES_PER_REGION, SUPPORTED_LOCALES_EU, SUPPORTED_LOCALES_US };