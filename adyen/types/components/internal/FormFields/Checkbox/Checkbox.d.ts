import { ComponentChild, h } from 'preact';
import './Checkbox.scss';
interface CheckboxProps {
    checked?: boolean;
    classNameModifiers?: string[];
    label: string | ComponentChild;
    name?: string;
    isInvalid?: boolean;
    onChange?: any;
    onInput?: any;
    className?: string;
    value?: string;
}
declare function Checkbox({ classNameModifiers, label, isInvalid, onChange, ...props }: CheckboxProps): h.JSX.Element;
declare namespace Checkbox {
    var defaultProps: {
        onChange: () => void;
    };
}
export default Checkbox;
