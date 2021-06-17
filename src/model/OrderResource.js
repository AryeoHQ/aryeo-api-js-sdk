/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Order from './Order';

/**
 * The OrderResource model module.
 * @module model/OrderResource
 * @version 1.0.0
 */
class OrderResource {
    /**
     * Constructs a new <code>OrderResource</code>.
     * An order.
     * @alias module:model/OrderResource
     */
    constructor() { 
        
        OrderResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderResource} obj Optional instance to populate.
     * @return {module:model/OrderResource} The populated <code>OrderResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderResource();

            if (data.hasOwnProperty('data')) {
                obj['data'] = Order.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Order} data
 */
OrderResource.prototype['data'] = undefined;






export default OrderResource;

