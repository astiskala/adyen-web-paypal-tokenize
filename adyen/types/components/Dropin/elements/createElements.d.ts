import { PaymentMethod } from '../../../types';
/**
 * Returns a filtered (available) list of component Elements
 * @param components - Array of PaymentMethod objects from the /paymentMethods response
 * @param props - High level props to be passed through to every component (as defined in utils/getCommonProps)
 * @param create - Reference to the main instance `create` method
 */
declare const createElements: (components: PaymentMethod[], props: any, create: any) => Promise<any[]>;
export default createElements;
