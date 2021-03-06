/// <reference types="googlepay" />
import { Component, h } from 'preact';
import './GooglePayButton.scss';
interface GooglePayButtonProps {
    buttonColor: google.payments.api.ButtonColor;
    buttonType: google.payments.api.ButtonType;
    buttonSizeMode: google.payments.api.ButtonSizeMode;
    buttonLocale: string;
    paymentsClient: Promise<google.payments.api.PaymentsClient>;
    onClick: (e: Event) => void;
}
declare class GooglePayButton extends Component<GooglePayButtonProps> {
    paywithgoogleWrapper: any;
    static defaultProps: {
        buttonColor: string;
        buttonType: string;
        buttonSizeMode: string;
    };
    private clicked;
    private handleClick;
    componentDidMount(): void;
    render(): h.JSX.Element;
}
export default GooglePayButton;
