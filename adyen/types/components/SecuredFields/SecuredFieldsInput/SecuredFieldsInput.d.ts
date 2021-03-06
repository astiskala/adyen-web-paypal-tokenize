import { h } from 'preact';
import Language from '../../../language/Language';
interface SecuredFieldsProps {
    onChange: (data: any) => void;
    i18n: Language;
}
declare function SecuredFieldsInput(props: SecuredFieldsProps): h.JSX.Element;
declare namespace SecuredFieldsInput {
    var defaultProps: {
        onChange: () => void;
        onError: () => void;
    };
}
export default SecuredFieldsInput;
