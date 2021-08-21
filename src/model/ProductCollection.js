/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import Product from './Product';

/**
 * The ProductCollection model module.
 * @module model/ProductCollection
 * @version 2021-06-17
 */
class ProductCollection {
    /**
     * Constructs a new <code>ProductCollection</code>.
     * A collection of products.
     * @alias module:model/ProductCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        ProductCollection.initialize(this, status);
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
     * Constructs a <code>ProductCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductCollection} obj Optional instance to populate.
     * @return {module:model/ProductCollection} The populated <code>ProductCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Product]);
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
ProductCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/Product>} data
 */
ProductCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
ProductCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
ProductCollection.prototype['links'] = undefined;






export default ProductCollection;

