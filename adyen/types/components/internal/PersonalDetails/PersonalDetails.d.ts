import { h } from 'preact';
import { PersonalDetailsProps } from './types';
import './PersonalDetails.scss';
declare function PersonalDetails(props: PersonalDetailsProps): h.JSX.Element;
declare namespace PersonalDetails {
    var defaultProps: {
        data: {};
        onChange: () => void;
        placeholders: {};
        requiredFields: string[];
        validationRules: import("../../../utils/Validator/Validator").ValidatorRules;
        visibility: string;
    };
}
export default PersonalDetails;
