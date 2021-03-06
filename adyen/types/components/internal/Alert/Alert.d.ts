import { ComponentChildren, h } from 'preact';
import './Alert.scss';
declare const ALERT_TYPES: string[];
interface AlertProps {
    children: ComponentChildren;
    classNames?: string[];
    icon?: string;
    type?: typeof ALERT_TYPES[number];
}
export default function Alert({ children, classNames, type, icon }: AlertProps): h.JSX.Element;
export {};
