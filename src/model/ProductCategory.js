/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProductCategory model module.
 * @module model/ProductCategory
 * @version 2021-06-17
 */
class ProductCategory {
    /**
     * Constructs a new <code>ProductCategory</code>.
     * A category for products.
     * @alias module:model/ProductCategory
     * @param id {String} ID of the product category. UUID Version 4.
     * @param title {String} The title of the product category.
     */
    constructor(id, title) { 
        
        ProductCategory.initialize(this, id, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title) { 
        obj['id'] = id;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>ProductCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductCategory} obj Optional instance to populate.
     * @return {module:model/ProductCategory} The populated <code>ProductCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCategory();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the product category. UUID Version 4.
 * @member {String} id
 */
ProductCategory.prototype['id'] = undefined;

/**
 * The title of the product category.
 * @member {String} title
 */
ProductCategory.prototype['title'] = undefined;






export default ProductCategory;

