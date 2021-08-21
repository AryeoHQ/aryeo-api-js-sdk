/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderItem model module.
 * @module model/OrderItem
 * @version 2021-06-17
 */
class OrderItem {
    /**
     * Constructs a new <code>OrderItem</code>.
     * A product associated with an order.
     * @alias module:model/OrderItem
     * @param id {String} ID of the item. UUID Version 4.
     */
    constructor(id) { 
        
        OrderItem.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>OrderItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderItem} obj Optional instance to populate.
     * @return {module:model/OrderItem} The populated <code>OrderItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID of the item. UUID Version 4.
 * @member {String} id
 */
OrderItem.prototype['id'] = undefined;

/**
 * The title of the item.
 * @member {String} title
 */
OrderItem.prototype['title'] = undefined;

/**
 * The description of the item.
 * @member {String} description
 */
OrderItem.prototype['description'] = undefined;

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the cost of a single instance of this item. This is multiplied by the quantity to calculate what was or will be charged.
 * @member {Number} amount
 */
OrderItem.prototype['amount'] = undefined;

/**
 * A positive integer representing the number of instances of this item that was or will be charged.
 * @member {Number} quantity
 */
OrderItem.prototype['quantity'] = undefined;






export default OrderItem;

