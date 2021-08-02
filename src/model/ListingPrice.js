/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ListingPrice model module.
 * @module model/ListingPrice
 * @version 2021-06-17
 */
class ListingPrice {
    /**
     * Constructs a new <code>ListingPrice</code>.
     * Valuation data relating to the price of a listing.
     * @alias module:model/ListingPrice
     */
    constructor() { 
        
        ListingPrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListingPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListingPrice} obj Optional instance to populate.
     * @return {module:model/ListingPrice} The populated <code>ListingPrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListingPrice();

            if (data.hasOwnProperty('list_price')) {
                obj['list_price'] = ApiClient.convertToType(data['list_price'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The current price of the listing.
 * @member {Number} list_price
 */
ListingPrice.prototype['list_price'] = undefined;






export default ListingPrice;

