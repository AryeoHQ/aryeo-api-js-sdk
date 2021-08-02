/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListingLot model module.
 * @module model/ListingLot
 * @version 2021-06-17
 */
class ListingLot {
    /**
     * Constructs a new <code>ListingLot</code>.
     * Parcel data of the lot of a listing. Includes nearly everything about the land that makes up the listing.
     * @alias module:model/ListingLot
     */
    constructor() { 
        
        ListingLot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListingLot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListingLot} obj Optional instance to populate.
     * @return {module:model/ListingLot} The populated <code>ListingLot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListingLot();

            if (data.hasOwnProperty('size_acres')) {
                obj['size_acres'] = ApiClient.convertToType(data['size_acres'], 'Number');
            }
            if (data.hasOwnProperty('open_parking_spaces')) {
                obj['open_parking_spaces'] = ApiClient.convertToType(data['open_parking_spaces'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Total area of the lot of a listing in acres. 
 * @member {Number} size_acres
 */
ListingLot.prototype['size_acres'] = undefined;

/**
 * Number of parking spaces.
 * @member {Number} open_parking_spaces
 */
ListingLot.prototype['open_parking_spaces'] = undefined;






export default ListingLot;

