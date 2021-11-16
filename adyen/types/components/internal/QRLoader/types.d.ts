import { PaymentAmount } from '../../../types';
import Language from '../../../language/Language';
export interface QRLoaderProps {
    delay?: number;
    countdownTime?: number;
    onError?: (error: any) => void;
    onComplete?: (data: any) => void;
    throttleTime?: number;
    throttledInterval?: number;
    shouldRedirectOnMobile?: boolean;
    url?: string;
    type?: string;
    paymentData?: string;
    clientKey?: string;
    loadingContext?: string;
    qrCodeData?: string;
    qrCodeImage?: string;
    amount?: PaymentAmount;
    i18n?: Language;
    classNameModifiers?: string[];
    brandLogo?: string;
    introduction?: string;
    instructions?: string;
    copyBtn?: boolean;
}
export interface QRLoaderState {
    buttonStatus: string;
    completed: boolean;
    delay: any;
    expired: boolean;
    loading: boolean;
    onError: (error: any) => void;
    percentage: number;
    timePassed: number;
}
