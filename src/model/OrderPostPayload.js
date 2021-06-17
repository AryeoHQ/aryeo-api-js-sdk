/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import ProductItem from './ProductItem';

/**
 * The OrderPostPayload model module.
 * @module model/OrderPostPayload
 * @version 1.0.0
 */
class OrderPostPayload {
    /**
     * Constructs a new <code>OrderPostPayload</code>.
     * Payload for creating an order.
     * @alias module:model/OrderPostPayload
     */
    constructor() { 
        
        OrderPostPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPostPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderPostPayload} obj Optional instance to populate.
     * @return {module:model/OrderPostPayload} The populated <code>OrderPostPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPostPayload();

            if (data.hasOwnProperty('fulfillment_status')) {
                obj['fulfillment_status'] = ApiClient.convertToType(data['fulfillment_status'], 'String');
            }
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = ApiClient.convertToType(data['payment_status'], 'String');
            }
            if (data.hasOwnProperty('product_items')) {
                obj['product_items'] = ApiClient.convertToType(data['product_items'], [ProductItem]);
            }
        }
        return obj;
    }


}

/**
 * The fulfillment status of the order.
 * @member {module:model/OrderPostPayload.FulfillmentStatusEnum} fulfillment_status
 */
OrderPostPayload.prototype['fulfillment_status'] = undefined;

/**
 * The payment status of the order.
 * @member {module:model/OrderPostPayload.PaymentStatusEnum} payment_status
 */
OrderPostPayload.prototype['payment_status'] = undefined;

/**
 * product_items
 * @member {Array.<module:model/ProductItem>} product_items
 */
OrderPostPayload.prototype['product_items'] = undefined;





/**
 * Allowed values for the <code>fulfillment_status</code> property.
 * @enum {String}
 * @readonly
 */
OrderPostPayload['FulfillmentStatusEnum'] = {

    /**
     * value: "fulfilled"
     * @const
     */
    "fulfilled": "fulfilled",

    /**
     * value: "unfulfilled"
     * @const
     */
    "unfulfilled": "unfulfilled"
};


/**
 * Allowed values for the <code>payment_status</code> property.
 * @enum {String}
 * @readonly
 */
OrderPostPayload['PaymentStatusEnum'] = {

    /**
     * value: "paid"
     * @const
     */
    "paid": "paid",

    /**
     * value: "unpaid"
     * @const
     */
    "unpaid": "unpaid"
};



export default OrderPostPayload;

