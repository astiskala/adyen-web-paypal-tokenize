import { h } from 'preact';
import { PaymentAmount } from '../../../types';
import Language from "../../../language/Language";
interface PayButtonProps {
    /**
     * Class name modifiers will be used as: `adyen-checkout__image--${modifier}`
     */
    classNameModifiers?: string[];
    label?: string;
    amount: PaymentAmount;
    status?: string;
}
declare const payAmountLabel: (i18n: Language, amount: any) => string;
declare const PayButton: ({ amount, classNameModifiers, label, ...props }: PayButtonProps) => h.JSX.Element;
export default PayButton;
export { payAmountLabel };
