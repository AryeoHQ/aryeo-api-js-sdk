/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Group from './Group';

/**
 * The GroupResource model module.
 * @module model/GroupResource
 * @version 2021-06-17
 */
class GroupResource {
    /**
     * Constructs a new <code>GroupResource</code>.
     * A group.
     * @alias module:model/GroupResource
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        GroupResource.initialize(this, status);
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
     * Constructs a <code>GroupResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupResource} obj Optional instance to populate.
     * @return {module:model/GroupResource} The populated <code>GroupResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupResource();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Group.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
GroupResource.prototype['status'] = undefined;

/**
 * @member {module:model/Group} data
 */
GroupResource.prototype['data'] = undefined;






export default GroupResource;

