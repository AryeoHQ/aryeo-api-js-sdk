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
 * @version 2021-06-17
 */
class ListingResource {
    /**
     * Constructs a new <code>ListingResource</code>.
     * A listing.
     * @alias module:model/ListingResource
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        ListingResource.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
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

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Listing.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
ListingResource.prototype['status'] = undefined;

/**
 * @member {module:model/Listing} data
 */
ListingResource.prototype['data'] = undefined;






export default ListingResource;

