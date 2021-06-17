/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProductItem model module.
 * @module model/ProductItem
 * @version 1.0.0
 */
class ProductItem {
    /**
     * Constructs a new <code>ProductItem</code>.
     * A subtype or part of a product that a group is selling.
     * @alias module:model/ProductItem
     */
    constructor() { 
        
        ProductItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductItem} obj Optional instance to populate.
     * @return {module:model/ProductItem} The populated <code>ProductItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the product item.
 * @member {String} id
 */
ProductItem.prototype['id'] = undefined;






export default ProductItem;

