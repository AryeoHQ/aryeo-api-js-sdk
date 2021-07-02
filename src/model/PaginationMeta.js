/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PaginationMeta model module.
 * @module model/PaginationMeta
 * @version 1.0.0
 */
class PaginationMeta {
    /**
     * Constructs a new <code>PaginationMeta</code>.
     * Metadata about a paginated response.
     * @alias module:model/PaginationMeta
     * @param total {Number} Total number of records.
     * @param perPage {Number} Number of records per page.
     * @param currentPage {Number} The current page.
     * @param lastPage {Number} The last page of records.
     * @param path {String} The current paged path.
     */
    constructor(total, perPage, currentPage, lastPage, path) { 
        
        PaginationMeta.initialize(this, total, perPage, currentPage, lastPage, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total, perPage, currentPage, lastPage, path) { 
        obj['total'] = total;
        obj['per_page'] = perPage;
        obj['current_page'] = currentPage;
        obj['last_page'] = lastPage;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>PaginationMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginationMeta} obj Optional instance to populate.
     * @return {module:model/PaginationMeta} The populated <code>PaginationMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginationMeta();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('per_page')) {
                obj['per_page'] = ApiClient.convertToType(data['per_page'], 'Number');
            }
            if (data.hasOwnProperty('current_page')) {
                obj['current_page'] = ApiClient.convertToType(data['current_page'], 'Number');
            }
            if (data.hasOwnProperty('last_page')) {
                obj['last_page'] = ApiClient.convertToType(data['last_page'], 'Number');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Number');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Total number of records.
 * @member {Number} total
 */
PaginationMeta.prototype['total'] = undefined;

/**
 * Number of records per page.
 * @member {Number} per_page
 */
PaginationMeta.prototype['per_page'] = undefined;

/**
 * The current page.
 * @member {Number} current_page
 */
PaginationMeta.prototype['current_page'] = undefined;

/**
 * The last page of records.
 * @member {Number} last_page
 */
PaginationMeta.prototype['last_page'] = undefined;

/**
 * The ID of the first record on this page. This is specified as either `integer` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
 * @member {Number} from
 */
PaginationMeta.prototype['from'] = undefined;

/**
 * The ID of the last record on this page. This is specified as either `integer` or `null` purely for spec testing purposes. The model which is autogenerated from this definition will be thrown out and written by-hand.
 * @member {Number} to
 */
PaginationMeta.prototype['to'] = undefined;

/**
 * The current paged path.
 * @member {String} path
 */
PaginationMeta.prototype['path'] = undefined;






export default PaginationMeta;

