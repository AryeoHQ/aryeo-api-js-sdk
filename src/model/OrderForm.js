/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OrderForm model module.
 * @module model/OrderForm
 * @version 2021-06-17
 */
class OrderForm {
    /**
     * Constructs a new <code>OrderForm</code>.
     * A mechanism for placing new orders on the Aryeo platform. 
     * @alias module:model/OrderForm
     * @param id {String} UUID of the order form.
     * @param url {String} A URL of a publicly-accessible webpage for this order form.
     */
    constructor(id, url) { 
        
        OrderForm.initialize(this, id, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, url) { 
        obj['id'] = id;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>OrderForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderForm} obj Optional instance to populate.
     * @return {module:model/OrderForm} The populated <code>OrderForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderForm();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * UUID of the order form.
 * @member {String} id
 */
OrderForm.prototype['id'] = undefined;

/**
 * The title or name of the order form.
 * @member {String} title
 */
OrderForm.prototype['title'] = undefined;

/**
 * A URL of a publicly-accessible webpage for this order form.
 * @member {String} url
 */
OrderForm.prototype['url'] = undefined;






export default OrderForm;

