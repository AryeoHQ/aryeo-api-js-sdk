/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Group from './Group';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';

/**
 * The GroupCollection model module.
 * @module model/GroupCollection
 * @version 2021-06-17
 */
class GroupCollection {
    /**
     * Constructs a new <code>GroupCollection</code>.
     * A collection of groups.
     * @alias module:model/GroupCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        GroupCollection.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>GroupCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupCollection} obj Optional instance to populate.
     * @return {module:model/GroupCollection} The populated <code>GroupCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Group]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
GroupCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/Group>} data
 */
GroupCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
GroupCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
GroupCollection.prototype['links'] = undefined;






export default GroupCollection;

