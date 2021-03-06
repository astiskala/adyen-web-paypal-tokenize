interface StatusObjectProps {
    payload: string;
    resultCode: string;
    type: string;
}
export interface StatusObject {
    type: string;
    props: StatusObjectProps;
}
export interface AwaitComponentProps {
    type: string;
    delay: number;
    countdownTime: number;
    throttleTime: number;
    showCountdownTimer: boolean;
    throttleInterval: number;
    paymentData: string;
    url?: string;
    shouldRedirectOnMobile?: boolean;
    classNameModifiers?: string[];
    clientKey: string;
    onError: (error: any, component: any) => void;
    onComplete: (status: any, component: any) => void;
    brandLogo: string;
    messageText: string;
    awaitText: string;
    ref: any;
}
export {};
