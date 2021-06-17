/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Listing from './Listing';

/**
 * The ListingResource model module.
 * @module model/ListingResource
 * @version 1.0.0
 */
class ListingResource {
    /**
     * Constructs a new <code>ListingResource</code>.
     * A listing.
     * @alias module:model/ListingResource
     */
    constructor() { 
        
        ListingResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListingResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListingResource} obj Optional instance to populate.
     * @return {module:model/ListingResource} The populated <code>ListingResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListingResource();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Listing.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Listing} data
 */
ListingResource.prototype['data'] = undefined;






export default ListingResource;

