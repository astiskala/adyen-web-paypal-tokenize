import { Component, h } from 'preact';
import './IbanInput.scss';
interface IbanInputProps {
    holderName?: string;
    placeholders?: any;
    countryCode?: string;
    showPayButton?: any;
    payButton?: any;
    onChange: (data: any) => void;
}
interface IbanInputState {
    data: any;
    errors: any;
    valid: any;
    status: string;
    isValid: boolean;
    cursor: number;
}
declare class IbanInput extends Component<IbanInputProps, IbanInputState> {
    private ibanNumber;
    constructor(props: any);
    static defaultProps: {
        onChange: () => void;
        countryCode: any;
        holderName: boolean;
        placeholders: {};
    };
    setStatus(status: any): void;
    onChange(): void;
    setData: (key: any, value: any, cb?: any) => void;
    setError: (key: any, value: any, cb?: any) => void;
    setValid: (key: any, value: any, cb?: any) => void;
    handleHolderInput: (holder: any) => void;
    handleIbanInput: (e: any) => void;
    handleIbanBlur: (e: any) => void;
    showValidation(): void;
    render({ placeholders, countryCode }: IbanInputProps, { data, errors, valid }: {
        data: any;
        errors: any;
        valid: any;
    }): h.JSX.Element;
}
export default IbanInput;
