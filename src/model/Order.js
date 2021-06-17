/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Currency from './Currency';
import PartialListing from './PartialListing';

/**
 * The Order model module.
 * @module model/Order
 * @version 1.0.0
 */
class Order {
    /**
     * Constructs a new <code>Order</code>.
     * A payment request for some content or service.
     * @alias module:model/Order
     * @param id {String} ID of the order.
     * @param displayId {Number} A vanity id to be displayed for the order. For example, \"Order #1000\".
     * @param totalPriceCents {Number} The total price of the order given in cents.
     * @param currency {module:model/Currency} 
     * @param paymentStatus {module:model/Order.PaymentStatusEnum} The payment status of the order.
     * @param fulfillmentStatus {module:model/Order.FulfillmentStatusEnum} The fulfillment status of the order.
     */
    constructor(id, displayId, totalPriceCents, currency, paymentStatus, fulfillmentStatus) { 
        
        Order.initialize(this, id, displayId, totalPriceCents, currency, paymentStatus, fulfillmentStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, displayId, totalPriceCents, currency, paymentStatus, fulfillmentStatus) { 
        obj['id'] = id;
        obj['display_id'] = displayId;
        obj['total_price_cents'] = totalPriceCents;
        obj['currency'] = currency;
        obj['payment_status'] = paymentStatus;
        obj['fulfillment_status'] = fulfillmentStatus;
    }

    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Order();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('display_id')) {
                obj['display_id'] = ApiClient.convertToType(data['display_id'], 'Number');
            }
            if (data.hasOwnProperty('total_price_cents')) {
                obj['total_price_cents'] = ApiClient.convertToType(data['total_price_cents'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = ApiClient.convertToType(data['payment_status'], 'String');
            }
            if (data.hasOwnProperty('payment_url')) {
                obj['payment_url'] = ApiClient.convertToType(data['payment_url'], 'String');
            }
            if (data.hasOwnProperty('listing')) {
                obj['listing'] = PartialListing.constructFromObject(data['listing']);
            }
            if (data.hasOwnProperty('fulfillment_status')) {
                obj['fulfillment_status'] = ApiClient.convertToType(data['fulfillment_status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the order.
 * @member {String} id
 */
Order.prototype['id'] = undefined;

/**
 * A vanity id to be displayed for the order. For example, \"Order #1000\".
 * @member {Number} display_id
 */
Order.prototype['display_id'] = undefined;

/**
 * The total price of the order given in cents.
 * @member {Number} total_price_cents
 */
Order.prototype['total_price_cents'] = undefined;

/**
 * @member {module:model/Currency} currency
 */
Order.prototype['currency'] = undefined;

/**
 * The payment status of the order.
 * @member {module:model/Order.PaymentStatusEnum} payment_status
 */
Order.prototype['payment_status'] = undefined;

/**
 * A URL for to pay for the order.
 * @member {String} payment_url
 */
Order.prototype['payment_url'] = undefined;

/**
 * @member {module:model/PartialListing} listing
 */
Order.prototype['listing'] = undefined;

/**
 * The fulfillment status of the order.
 * @member {module:model/Order.FulfillmentStatusEnum} fulfillment_status
 */
Order.prototype['fulfillment_status'] = undefined;





/**
 * Allowed values for the <code>payment_status</code> property.
 * @enum {String}
 * @readonly
 */
Order['PaymentStatusEnum'] = {

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


/**
 * Allowed values for the <code>fulfillment_status</code> property.
 * @enum {String}
 * @readonly
 */
Order['FulfillmentStatusEnum'] = {

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



export default Order;

