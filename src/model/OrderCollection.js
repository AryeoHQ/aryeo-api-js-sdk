/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Order from './Order';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';

/**
 * The OrderCollection model module.
 * @module model/OrderCollection
 * @version 1.0.0
 */
class OrderCollection {
    /**
     * Constructs a new <code>OrderCollection</code>.
     * A collection of orders.
     * @alias module:model/OrderCollection
     */
    constructor() { 
        
        OrderCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderCollection} obj Optional instance to populate.
     * @return {module:model/OrderCollection} The populated <code>OrderCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCollection();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Order]);
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
 * @member {Array.<module:model/Order>} data
 */
OrderCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
OrderCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
OrderCollection.prototype['links'] = undefined;






export default OrderCollection;

