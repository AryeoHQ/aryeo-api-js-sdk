/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Listing from './Listing';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';

/**
 * The ListingCollection model module.
 * @module model/ListingCollection
 * @version 2021-06-17
 */
class ListingCollection {
    /**
     * Constructs a new <code>ListingCollection</code>.
     * A collection of listings.
     * @alias module:model/ListingCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        ListingCollection.initialize(this, status);
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
     * Constructs a <code>ListingCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListingCollection} obj Optional instance to populate.
     * @return {module:model/ListingCollection} The populated <code>ListingCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListingCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Listing]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
ListingCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/Listing>} data
 */
ListingCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
ListingCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
ListingCollection.prototype['links'] = undefined;






export default ListingCollection;

