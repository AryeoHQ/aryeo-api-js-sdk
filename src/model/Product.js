/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import ProductCategory from './ProductCategory';
import ProductVariant from './ProductVariant';

/**
 * The Product model module.
 * @module model/Product
 * @version 2021-06-17
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * A product available for purchase via an order.
     * @alias module:model/Product
     * @param id {String} ID of the product. UUID Version 4.
     * @param title {String} The title of the product.
     * @param type {module:model/Product.TypeEnum} The type of product.
     */
    constructor(id, title, type) { 
        
        Product.initialize(this, id, title, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title, type) { 
        obj['id'] = id;
        obj['title'] = title;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ApiClient.convertToType(data['variants'], [ProductVariant]);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [ProductCategory]);
            }
        }
        return obj;
    }


}

/**
 * ID of the product. UUID Version 4.
 * @member {String} id
 */
Product.prototype['id'] = undefined;

/**
 * The title of the product.
 * @member {String} title
 */
Product.prototype['title'] = undefined;

/**
 * The description of the product.
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * The active status of a product.
 * @member {Boolean} active
 */
Product.prototype['active'] = undefined;

/**
 * The type of product.
 * @member {module:model/Product.TypeEnum} type
 */
Product.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/ProductVariant>} variants
 */
Product.prototype['variants'] = undefined;

/**
 * @member {Array.<module:model/ProductCategory>} categories
 */
Product.prototype['categories'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Product['TypeEnum'] = {

    /**
     * value: "MAIN"
     * @const
     */
    "MAIN": "MAIN",

    /**
     * value: "ADDON"
     * @const
     */
    "ADDON": "ADDON"
};



export default Product;

