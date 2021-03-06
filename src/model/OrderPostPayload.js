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
            if (data.hasOwnProperty('address_id')) {
                obj['address_id'] = ApiClient.convertToType(data['address_id'], 'String');
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], 'Boolean');
            }
            if (data.hasOwnProperty('lock_download_for_payment')) {
                obj['lock_download_for_payment'] = ApiClient.convertToType(data['lock_download_for_payment'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_payments_before_fulfillment')) {
                obj['allow_payments_before_fulfillment'] = ApiClient.convertToType(data['allow_payments_before_fulfillment'], 'Boolean');
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
 * Indicates if the downloads for the attached listing should be locked while there is an outstanding balance on the order.
 * @member {Boolean} lock_download_for_payment
 */
OrderPostPayload.prototype['lock_download_for_payment'] = undefined;

/**
 * Indicates if the order will allow payments from the customer before the order is marked as fulfilled.
 * @member {Boolean} allow_payments_before_fulfillment
 */
OrderPostPayload.prototype['allow_payments_before_fulfillment'] = undefined;





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



export default OrderPostPayload;

