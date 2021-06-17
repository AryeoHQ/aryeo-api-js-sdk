/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import PartialListing from './PartialListing';

/**
 * The PartialListingCollection model module.
 * @module model/PartialListingCollection
 * @version 1.0.0
 */
class PartialListingCollection {
    /**
     * Constructs a new <code>PartialListingCollection</code>.
     * A collection of partial listings.
     * @alias module:model/PartialListingCollection
     */
    constructor() { 
        
        PartialListingCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PartialListingCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialListingCollection} obj Optional instance to populate.
     * @return {module:model/PartialListingCollection} The populated <code>PartialListingCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartialListingCollection();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PartialListing]);
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
 * @member {Array.<module:model/PartialListing>} data
 */
PartialListingCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
PartialListingCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
PartialListingCollection.prototype['links'] = undefined;






export default PartialListingCollection;

