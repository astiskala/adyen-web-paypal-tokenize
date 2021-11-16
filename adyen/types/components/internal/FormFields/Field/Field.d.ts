import { Component, h } from 'preact';
import './Field.scss';
import { FieldProps, FieldState } from './types';
declare class Field extends Component<FieldProps, FieldState> {
    private readonly uniqueId;
    constructor(props: any);
    onFocus(e: any): void;
    onBlur(e: any): void;
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        focused: any;
        filled?: undefined;
    } | {
        filled: any;
        focused?: undefined;
    };
    render({ className, classNameModifiers, children, errorMessage, helper, inputWrapperModifiers, isLoading, isValid, label, dualBrandingElements, dir, name, showValidIcon }: {
        className?: string;
        classNameModifiers?: any[];
        children: any;
        errorMessage: any;
        helper: any;
        inputWrapperModifiers?: any[];
        isLoading: any;
        isValid: any;
        label: any;
        dualBrandingElements: any;
        dir: any;
        name: any;
        showValidIcon: any;
    }): h.JSX.Element;
}
export default Field;
