import { AfterPay, AfterPayB2B } from './AfterPay';
import AmazonPay from './AmazonPay';
import ApplePay from './ApplePay';
import { BillDeskOnline, BillDeskWallet } from './BillDesk';
import Card from './Card';
import Bancontact from './Card/Bancontact';
import Donation from './Donation';
import Giropay from './Giropay';
import GooglePay from './GooglePay';
import Entercash from './Entercash';
import Econtext from './Econtext';
import { FacilyPay3x, FacilyPay4x, FacilyPay6x, FacilyPay10x, FacilyPay12x } from './FacilyPay';
import Ideal from './Ideal';
import PayPal from './PayPal';
import QiwiWallet from './QiwiWallet';
import Redirect from './Redirect';
import SecuredFields from './SecuredFields';
import Sepa from './Sepa';
import { ThreeDS2DeviceFingerprint, ThreeDS2Challenge } from './ThreeDS2';
import WeChat from './WeChat';
import BcmcMobile from './BcmcMobile';
import { MolPayEBankingMY, MolPayEBankingTH, MolPayEBankingVN } from './MolPayEBanking';
import OpenBankingUK from './OpenBankingUK';
import Dragonpay from './Dragonpay';
import Doku from './Doku';
import Boleto from './Boleto';
import Oxxo from './Oxxo';
import Multibanco from './Multibanco';
import Dotpay from './Dotpay';
import Eps from './EPS';
import Giftcard from './Giftcard';
import Vipps from './Vipps';
import { PayuCashcard, PayuNetBanking } from './PayU';
import RatePay from './RatePay';
import Swish from './Swish';
import Dropin from './Dropin';
import Ach from './Ach';
import MBWay from './MBWay';
import Blik from './Blik';
import BankTransfer from './BankTransfer';
import Affirm from './Affirm';
import Pix from './Pix';
import BacsDD from './BacsDD';
import Address from './Address';
import PersonalDetails from './PersonalDetails';
import Klarna from './Klarna';
import Twint from "./Twint";
/**
 * Maps each component with a Component element.
 */
declare const componentsMap: {
    dropin: typeof Dropin;
    ach: typeof Ach;
    address: typeof Address;
    afterpay: typeof AfterPay;
    afterpay_default: typeof AfterPay;
    afterpay_b2b: typeof AfterPayB2B;
    amazonpay: typeof AmazonPay;
    amex: typeof Card;
    applepay: typeof ApplePay;
    bankTransfer_IBAN: typeof BankTransfer;
    bcmc: typeof Bancontact;
    bcmc_mobile: typeof BcmcMobile;
    bcmc_mobile_QR: typeof BcmcMobile;
    blik: typeof Blik;
    billdesk_online: typeof BillDeskOnline;
    billdesk_wallet: typeof BillDeskWallet;
    boletobancario: typeof Boleto;
    boletobancario_bancodobrasil: typeof Boleto;
    boletobancario_bradesco: typeof Boleto;
    boletobancario_hsbc: typeof Boleto;
    boletobancario_itau: typeof Boleto;
    boletobancario_santander: typeof Boleto;
    primeiropay_boleto: typeof Boleto;
    card: typeof Card;
    storedCard: typeof Card;
    diners: typeof Card;
    directdebit_GB: typeof BacsDD;
    discover: typeof Card;
    doku: typeof Doku;
    doku_alfamart: typeof Doku;
    doku_permata_lite_atm: typeof Doku;
    doku_indomaret: typeof Doku;
    doku_atm_mandiri_va: typeof Doku;
    doku_sinarmas_va: typeof Doku;
    doku_mandiri_va: typeof Doku;
    doku_cimb_va: typeof Doku;
    doku_danamon_va: typeof Doku;
    doku_bri_va: typeof Doku;
    doku_bni_va: typeof Doku;
    doku_bca_va: typeof Doku;
    doku_wallet: typeof Doku;
    donation: typeof Donation;
    dotpay: typeof Dotpay;
    dragonpay_ebanking: typeof Dragonpay;
    dragonpay_otc_banking: typeof Dragonpay;
    dragonpay_otc_non_banking: typeof Dragonpay;
    dragonpay_otc_philippines: typeof Dragonpay;
    econtext_seven_eleven: typeof Econtext;
    econtext_atm: typeof Econtext;
    econtext_stores: typeof Econtext;
    econtext_online: typeof Econtext;
    entercash: typeof Entercash;
    eps: typeof Eps;
    facilypay_3x: typeof FacilyPay3x;
    facilypay_4x: typeof FacilyPay4x;
    facilypay_6x: typeof FacilyPay6x;
    facilypay_10x: typeof FacilyPay10x;
    facilypay_12x: typeof FacilyPay12x;
    giropay: typeof Giropay;
    ideal: typeof Ideal;
    jcb: typeof Card;
    kcp: typeof Card;
    klarna: typeof Klarna;
    klarna_paynow: typeof Klarna;
    klarna_account: typeof Klarna;
    maestro: typeof Card;
    mbway: typeof MBWay;
    mc: typeof Card;
    molpay_ebanking_fpx_MY: typeof MolPayEBankingMY;
    molpay_ebanking_TH: typeof MolPayEBankingTH;
    molpay_ebanking_VN: typeof MolPayEBankingVN;
    openbanking_UK: typeof OpenBankingUK;
    paypal: typeof PayPal;
    payu_IN_cashcard: typeof PayuCashcard;
    payu_IN_nb: typeof PayuNetBanking;
    paywithgoogle: typeof GooglePay;
    personal_details: typeof PersonalDetails;
    googlepay: typeof GooglePay;
    pix: typeof Pix;
    qiwiwallet: typeof QiwiWallet;
    ratepay: typeof RatePay;
    redirect: typeof Redirect;
    securedfields: typeof SecuredFields;
    sepadirectdebit: typeof Sepa;
    scheme: typeof Card;
    threeDS2Challenge: typeof ThreeDS2Challenge;
    threeDS2DeviceFingerprint: typeof ThreeDS2DeviceFingerprint;
    visa: typeof Card;
    wechatpay: typeof WeChat;
    wechatpayQR: typeof WeChat;
    oxxo: typeof Oxxo;
    multibanco: typeof Multibanco;
    giftcard: typeof Giftcard;
    vipps: typeof Vipps;
    swish: typeof Swish;
    affirm: typeof Affirm;
    twint: typeof Twint;
    default: any;
};
/**
 * Instantiates a new Component element either by class reference or by name
 * It also assigns a new uuid to each instance, so we can recognize it during the current session
 * @param componentType - class or componentsMap's key
 * @param props - for the new Component element
 * @returns new PaymentMethod or null
 */
export declare const getComponent: (componentType: any, props: any) => any;
/**
 * Gets the configuration for type from componentsConfig
 * @param type - component type
 * @param componentsConfig - global paymentMethodsConfiguration
 * @returns component configuration
 */
export declare const getComponentConfiguration: (type: string, componentsConfig?: {}, isStoredCard?: boolean) => any;
export default componentsMap;
