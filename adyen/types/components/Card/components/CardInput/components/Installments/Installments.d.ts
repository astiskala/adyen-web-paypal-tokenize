import { h } from 'preact';
import { InstallmentsProps } from '../types';
/**
 * Installments generic dropdown
 */
declare function Installments(props: InstallmentsProps): h.JSX.Element;
declare namespace Installments {
    var defaultProps: {
        brand: string;
        amount: {};
        onChange: () => void;
    };
}
export default Installments;
