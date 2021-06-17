/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PartialAddress model module.
 * @module model/PartialAddress
 * @version 1.0.0
 */
class PartialAddress {
    /**
     * Constructs a new <code>PartialAddress</code>.
     * A structure containing a street address and additional metadata about a location.
     * @alias module:model/PartialAddress
     * @param id {Number} ID of address.
     * @param formattedAddress1 {String} A formatted address string containing the street.
     * @param formattedAddress2 {String} A formatted address string containing the city, state, and zipcode.
     * @param latitude {Number} Latitude of the address.
     * @param longitude {Number} Longitude of the address.
     */
    constructor(id, formattedAddress1, formattedAddress2, latitude, longitude) { 
        
        PartialAddress.initialize(this, id, formattedAddress1, formattedAddress2, latitude, longitude);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, formattedAddress1, formattedAddress2, latitude, longitude) { 
        obj['id'] = id;
        obj['formatted_address_1'] = formattedAddress1;
        obj['formatted_address_2'] = formattedAddress2;
        obj['latitude'] = latitude;
        obj['longitude'] = longitude;
    }

    /**
     * Constructs a <code>PartialAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialAddress} obj Optional instance to populate.
     * @return {module:model/PartialAddress} The populated <code>PartialAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartialAddress();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('full_address')) {
                obj['full_address'] = ApiClient.convertToType(data['full_address'], 'String');
            }
            if (data.hasOwnProperty('formatted_address_1')) {
                obj['formatted_address_1'] = ApiClient.convertToType(data['formatted_address_1'], 'String');
            }
            if (data.hasOwnProperty('formatted_address_2')) {
                obj['formatted_address_2'] = ApiClient.convertToType(data['formatted_address_2'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
            if (data.hasOwnProperty('address_line_1')) {
                obj['address_line_1'] = ApiClient.convertToType(data['address_line_1'], 'String');
            }
            if (data.hasOwnProperty('address_line_2')) {
                obj['address_line_2'] = ApiClient.convertToType(data['address_line_2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of address.
 * @member {Number} id
 */
PartialAddress.prototype['id'] = undefined;

/**
 * The full address string containing address_1 and address_2.
 * @member {String} full_address
 */
PartialAddress.prototype['full_address'] = undefined;

/**
 * A formatted address string containing the street.
 * @member {String} formatted_address_1
 */
PartialAddress.prototype['formatted_address_1'] = undefined;

/**
 * A formatted address string containing the city, state, and zipcode.
 * @member {String} formatted_address_2
 */
PartialAddress.prototype['formatted_address_2'] = undefined;

/**
 * Latitude of the address.
 * @member {Number} latitude
 */
PartialAddress.prototype['latitude'] = undefined;

/**
 * Longitude of the address.
 * @member {Number} longitude
 */
PartialAddress.prototype['longitude'] = undefined;

/**
 * ID of place.
 * @member {String} place_id
 */
PartialAddress.prototype['place_id'] = undefined;

/**
 * Address line 1
 * @member {String} address_line_1
 */
PartialAddress.prototype['address_line_1'] = undefined;

/**
 * Address line 2
 * @member {String} address_line_2
 */
PartialAddress.prototype['address_line_2'] = undefined;

/**
 * City
 * @member {String} city
 */
PartialAddress.prototype['city'] = undefined;

/**
 * State
 * @member {String} state
 */
PartialAddress.prototype['state'] = undefined;

/**
 * Postal Code
 * @member {String} postal_code
 */
PartialAddress.prototype['postal_code'] = undefined;






export default PartialAddress;

