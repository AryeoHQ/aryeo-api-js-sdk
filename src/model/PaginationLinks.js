/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PaginationLinks model module.
 * @module model/PaginationLinks
 * @version 2021-06-17
 */
class PaginationLinks {
    /**
     * Constructs a new <code>PaginationLinks</code>.
     * Related links for a paginated response.
     * @alias module:model/PaginationLinks
     * @param first {String} The first page.
     * @param last {String} The last page.
     */
    constructor(first, last) { 
        
        PaginationLinks.initialize(this, first, last);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, first, last) { 
        obj['first'] = first;
        obj['last'] = last;
    }

    /**
     * Constructs a <code>PaginationLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationLinks} obj Optional instance to populate.
     * @return {module:model/PaginationLinks} The populated <code>PaginationLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationLinks();

            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'String');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'String');
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The first page.
 * @member {String} first
 */
PaginationLinks.prototype['first'] = undefined;

/**
 * The last page.
 * @member {String} last
 */
PaginationLinks.prototype['last'] = undefined;

/**
 * The previous page. This is specified as either `string` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
 * @member {String} prev
 */
PaginationLinks.prototype['prev'] = undefined;

/**
 * The next page. This is specified as either `string` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
 * @member {String} next
 */
PaginationLinks.prototype['next'] = undefined;






export default PaginationLinks;

