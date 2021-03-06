import { h } from 'preact';
import { SelectProps } from './types';
import './Select.scss';
declare function Select({ items, className, classNameModifiers, filterable, readonly, onChange, selected, name, isInvalid, isValid, placeholder, uniqueId }: SelectProps): h.JSX.Element;
declare namespace Select {
    var defaultProps: {
        className: string;
        classNameModifiers: any[];
        filterable: boolean;
        items: any[];
        readonly: boolean;
        onChange: () => void;
    };
}
export default Select;
