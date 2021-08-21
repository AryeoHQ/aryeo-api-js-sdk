/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProductVariant model module.
 * @module model/ProductVariant
 * @version 2021-06-17
 */
class ProductVariant {
    /**
     * Constructs a new <code>ProductVariant</code>.
     * A variant of a product.
     * @alias module:model/ProductVariant
     * @param id {String} ID of the product variant. UUID Version 4.
     * @param title {String} The title of the product variant.
     * @param price {Number} A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the price of the product variant.
     */
    constructor(id, title, price) { 
        
        ProductVariant.initialize(this, id, title, price);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, price) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['price'] = price;
    }

    /**
     * Constructs a <code>ProductVariant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariant} obj Optional instance to populate.
     * @return {module:model/ProductVariant} The populated <code>ProductVariant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID of the product variant. UUID Version 4.
 * @member {String} id
 */
ProductVariant.prototype['id'] = undefined;

/**
 * The title of the product variant.
 * @member {String} title
 */
ProductVariant.prototype['title'] = undefined;

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00) representing the price of the product variant.
 * @member {Number} price
 */
ProductVariant.prototype['price'] = undefined;






export default ProductVariant;

