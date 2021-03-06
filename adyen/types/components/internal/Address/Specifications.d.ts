import { AddressSchema } from './types';
declare class Specifications {
    private specifications;
    constructor(specifications?: any);
    /**
     * Checks if a certain country has a dataset.
     * @param country - The selected country
     * @returns Boolean
     */
    countryHasDataset(country: string): boolean;
    /**
     * Checks if a certain country has the passed field in their optional fields array.
     * @param country - The selected country
     * @param fieldName - The field to be checked
     * @returns Boolean
     */
    countryHasOptionalField(country: string, fieldName: string): boolean;
    /**
     * Returns the address schema of the selected country or the default address schema.
     * @param country - The selected country
     * @returns AddressSchema
     */
    getAddressSchemaForCountry(country: string): AddressSchema;
    /**
     * Returns the optional fields of the selected country or the default optional fields.
     * @param country - The selected country
     * @returns Optional fields array
     */
    getOptionalFieldsForCountry(country: string): string[];
    /**
     * Returns the key for a field of the passed country or the default key for that field.
     * @param fieldName - The field to be searched
     * @param country - The selected country
     */
    getKeyForField(fieldName: string, country: string): string;
    /**
     * Returns the placeholder key for a field of the passed country or the default key for that field.
     * @param fieldName - The field to be searched
     * @param country - The selected country
     */
    getPlaceholderKeyForField(fieldName: string, country: string): string;
}
export default Specifications;
