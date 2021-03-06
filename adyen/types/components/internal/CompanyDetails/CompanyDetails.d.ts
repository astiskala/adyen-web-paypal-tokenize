import { h } from 'preact';
import { CompanyDetailsProps } from './types';
declare function CompanyDetails(props: CompanyDetailsProps): h.JSX.Element;
declare namespace CompanyDetails {
    var defaultProps: {
        data: {};
        onChange: () => void;
        visibility: string;
        requiredFields: string[];
        validationRules: {
            default: {
                validate: (value: any) => boolean;
                modes: string[];
            };
        };
    };
}
export default CompanyDetails;
