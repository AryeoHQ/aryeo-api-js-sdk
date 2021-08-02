/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Address model module.
 * @module model/Address
 * @version 2021-06-17
 */
class Address {
    /**
     * Constructs a new <code>Address</code>.
     * A street address and additional metadata about a location.
     * @alias module:model/Address
     * @param id {String} ID of the address.
     * @param latitude {Number} The geographic latitude of some reference point of the location, specified in degrees and decimal parts. Positive numbers must not include the plus symbol.
     * @param longitude {Number} The geographic longitude of some reference point of the location, specified in degrees and decimal parts. Positive numbers must not include the plus symbol.
     */
    constructor(id, latitude, longitude) { 
        
        Address.initialize(this, id, latitude, longitude);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, latitude, longitude) { 
        obj['id'] = id;
        obj['latitude'] = latitude;
        obj['longitude'] = longitude;
    }

    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Address();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('street_number')) {
                obj['street_number'] = ApiClient.convertToType(data['street_number'], 'String');
            }
            if (data.hasOwnProperty('street_name')) {
                obj['street_name'] = ApiClient.convertToType(data['street_name'], 'String');
            }
            if (data.hasOwnProperty('unit_number')) {
                obj['unit_number'] = ApiClient.convertToType(data['unit_number'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('city_region')) {
                obj['city_region'] = ApiClient.convertToType(data['city_region'], 'String');
            }
            if (data.hasOwnProperty('county_or_parish')) {
                obj['county_or_parish'] = ApiClient.convertToType(data['county_or_parish'], 'String');
            }
            if (data.hasOwnProperty('state_or_province')) {
                obj['state_or_province'] = ApiClient.convertToType(data['state_or_province'], 'String');
            }
            if (data.hasOwnProperty('state_or_province_region')) {
                obj['state_or_province_region'] = ApiClient.convertToType(data['state_or_province_region'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('country_region')) {
                obj['country_region'] = ApiClient.convertToType(data['country_region'], 'String');
            }
            if (data.hasOwnProperty('unparsed_address')) {
                obj['unparsed_address'] = ApiClient.convertToType(data['unparsed_address'], 'String');
            }
            if (data.hasOwnProperty('unparsed_address_part_one')) {
                obj['unparsed_address_part_one'] = ApiClient.convertToType(data['unparsed_address_part_one'], 'String');
            }
            if (data.hasOwnProperty('unparsed_address_part_two')) {
                obj['unparsed_address_part_two'] = ApiClient.convertToType(data['unparsed_address_part_two'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the address.
 * @member {String} id
 */
Address.prototype['id'] = undefined;

/**
 * The geographic latitude of some reference point of the location, specified in degrees and decimal parts. Positive numbers must not include the plus symbol.
 * @member {Number} latitude
 */
Address.prototype['latitude'] = undefined;

/**
 * The geographic longitude of some reference point of the location, specified in degrees and decimal parts. Positive numbers must not include the plus symbol.
 * @member {Number} longitude
 */
Address.prototype['longitude'] = undefined;

/**
 * The street number portion of a location's address. In some areas, the street number may contain non-numeric characters. This field can also contain extensions and modifiers to the street number, such as \"1/2\" or \"-B\".
 * @member {String} street_number
 */
Address.prototype['street_number'] = undefined;

/**
 * The street name portion of a location's address.
 * @member {String} street_name
 */
Address.prototype['street_name'] = undefined;

/**
 * The number or portion of a larger building or complex. Examples are: \"APT G\", \"55\", etc.
 * @member {String} unit_number
 */
Address.prototype['unit_number'] = undefined;

/**
 * The postal code portion of a location's address.
 * @member {String} postal_code
 */
Address.prototype['postal_code'] = undefined;

/**
 * The city of a location's address.
 * @member {String} city
 */
Address.prototype['city'] = undefined;

/**
 * A sub-section or area of a defined city. Examples would be SoHo in New York, NY, Ironbound in Newark, NJ or Inside the Beltway.
 * @member {String} city_region
 */
Address.prototype['city_region'] = undefined;

/**
 * The County, Parish or other regional authority of the location.
 * @member {String} county_or_parish
 */
Address.prototype['county_or_parish'] = undefined;

/**
 * The ISO 3166-2 subdivision code for the state or province of the location. For example, “MA” for Massachusetts, United States.
 * @member {String} state_or_province
 */
Address.prototype['state_or_province'] = undefined;

/**
 * A sub-section or area of a defined state or province. Examples would be the Keys in FL or Hudson Valley in NY.
 * @member {String} state_or_province_region
 */
Address.prototype['state_or_province_region'] = undefined;

/**
 * The ISO 3166-1 country code for this for the country of the location.
 * @member {String} country
 */
Address.prototype['country'] = undefined;

/**
 * A sub-section or area of a defined country. Examples would be Napa Valley in the US, or the Amalfi Coast in Italy.
 * @member {String} country_region
 */
Address.prototype['country_region'] = undefined;

/**
 * Unparsed text representation of the address. 
 * @member {String} unparsed_address
 */
Address.prototype['unparsed_address'] = undefined;

/**
 * Unparsed text representation of the first part of the address, typically including the street number, street name, and unit number if applicable.  
 * @member {String} unparsed_address_part_one
 */
Address.prototype['unparsed_address_part_one'] = undefined;

/**
 * Unparsed text representation of the second part of the address, typically including the city, state or province, and postal code.  
 * @member {String} unparsed_address_part_two
 */
Address.prototype['unparsed_address_part_two'] = undefined;






export default Address;

