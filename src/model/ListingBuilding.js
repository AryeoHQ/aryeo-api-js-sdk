/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListingBuilding model module.
 * @module model/ListingBuilding
 * @version 2021-06-17
 */
class ListingBuilding {
    /**
     * Constructs a new <code>ListingBuilding</code>.
     * Structural data of the primary building on a listing. Includes everything from square footage of certain spaces to construction dates. 
     * @alias module:model/ListingBuilding
     */
    constructor() { 
        
        ListingBuilding.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListingBuilding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListingBuilding} obj Optional instance to populate.
     * @return {module:model/ListingBuilding} The populated <code>ListingBuilding</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListingBuilding();

            if (data.hasOwnProperty('bedrooms')) {
                obj['bedrooms'] = ApiClient.convertToType(data['bedrooms'], 'Number');
            }
            if (data.hasOwnProperty('bathrooms')) {
                obj['bathrooms'] = ApiClient.convertToType(data['bathrooms'], 'Number');
            }
            if (data.hasOwnProperty('square_feet')) {
                obj['square_feet'] = ApiClient.convertToType(data['square_feet'], 'Number');
            }
            if (data.hasOwnProperty('year_built')) {
                obj['year_built'] = ApiClient.convertToType(data['year_built'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total number of bedrooms.
 * @member {Number} bedrooms
 */
ListingBuilding.prototype['bedrooms'] = undefined;

/**
 * Sum of the number of bathrooms. Represented as a number in order to support half-baths.
 * @member {Number} bathrooms
 */
ListingBuilding.prototype['bathrooms'] = undefined;

/**
 * Total number of square feet.
 * @member {Number} square_feet
 */
ListingBuilding.prototype['square_feet'] = undefined;

/**
 * Year the property was built.
 * @member {Number} year_built
 */
ListingBuilding.prototype['year_built'] = undefined;






export default ListingBuilding;

