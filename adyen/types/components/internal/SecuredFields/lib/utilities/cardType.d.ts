import { CardObject } from '../types';
declare const _default: {
    detectCard: (pCardNumber: any, pAvailableCards?: any) => any;
    detectCardLength: (pCard: any, pUnformattedVal: any) => {
        shortenedNewValue: any;
        maxLength: any;
        reachedValidLength: boolean;
    };
    getShortestPermittedCardLength: () => any;
    getCardByBrand: (pBrand: any) => CardObject;
    isGenericCardType: (type?: string) => boolean;
    __NO_BRAND: string;
    allCards: CardObject[];
};
export default _default;
