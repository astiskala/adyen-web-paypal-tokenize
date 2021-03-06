import { Component, h } from 'preact';
import { PaymentAmount } from '../../../types';
interface GiftcardComponentProps {
    onChange: (state: any) => void;
    onFocus: (event: any) => void;
    onBlur: (event: any) => void;
    onSubmit: (event: any) => void;
    onBalanceCheck: (event: any) => void;
    amount: PaymentAmount;
    showPayButton?: boolean;
    payButton: (config: any) => any;
}
declare class Giftcard extends Component<GiftcardComponentProps> {
    state: {
        status: string;
        data: {};
        balance: any;
        transactionLimit: any;
        focusedElement: boolean;
        isValid: boolean;
    };
    static defaultProps: {
        pinRequired: boolean;
        onChange: () => void;
        onFocus: () => void;
        onBlur: () => void;
    };
    sfp: any;
    onChange: (sfpState: any) => void;
    showValidation: () => void;
    setStatus(status: any): void;
    handleFocus: (e: any) => void;
    setBalance: ({ balance, transactionLimit }: {
        balance: any;
        transactionLimit: any;
    }) => void;
    render(props: any, { focusedElement, balance, transactionLimit }: {
        focusedElement: any;
        balance: any;
        transactionLimit: any;
    }): h.JSX.Element;
}
export default Giftcard;
