/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderPostPayload model module.
 * @module model/OrderPostPayload
 * @version 2021-06-17
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
            if (data.hasOwnProperty('internal_notes')) {
                obj['internal_notes'] = ApiClient.convertToType(data['internal_notes'], 'String');
            }
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = ApiClient.convertToType(data['payment_status'], 'String');
            }
            if (data.hasOwnProperty('address_id')) {
                obj['address_id'] = ApiClient.convertToType(data['address_id'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The fulfillment status of the order. Defaults to \"UNFULFILLED\".
 * @member {module:model/OrderPostPayload.FulfillmentStatusEnum} fulfillment_status
 */
OrderPostPayload.prototype['fulfillment_status'] = undefined;

/**
 * Internal notes that will be attached to the order. Viewable only by the team.
 * @member {String} internal_notes
 */
OrderPostPayload.prototype['internal_notes'] = undefined;

/**
 * The payment status of the order. Defaults to \"UNPAID\". 
 * @member {module:model/OrderPostPayload.PaymentStatusEnum} payment_status
 */
OrderPostPayload.prototype['payment_status'] = undefined;

/**
 * ID of the address to associate with the order. UUID Version 4.
 * @member {String} address_id
 */
OrderPostPayload.prototype['address_id'] = undefined;

/**
 * ID of the customer to associate with the order. UUID Version 4.
 * @member {String} customer_id
 */
OrderPostPayload.prototype['customer_id'] = undefined;

/**
 * Indicates if the customer and creator notifications should be sent when creating the order. Requires an address and customer to be set in order for the notifications to be sent.
 * @member {Boolean} notify
 */
OrderPostPayload.prototype['notify'] = undefined;





/**
 * Allowed values for the <code>fulfillment_status</code> property.
 * @enum {String}
 * @readonly
 */
OrderPostPayload['FulfillmentStatusEnum'] = {

    /**
     * value: "FULFILLED"
     * @const
     */
    "FULFILLED": "FULFILLED",

    /**
     * value: "UNFULFILLED"
     * @const
     */
    "UNFULFILLED": "UNFULFILLED"
};


/**
 * Allowed values for the <code>payment_status</code> property.
 * @enum {String}
 * @readonly
 */
OrderPostPayload['PaymentStatusEnum'] = {

    /**
     * value: "PAID"
     * @const
     */
    "PAID": "PAID",

    /**
     * value: "UNPAID"
     * @const
     */
    "UNPAID": "UNPAID"
};



export default OrderPostPayload;

