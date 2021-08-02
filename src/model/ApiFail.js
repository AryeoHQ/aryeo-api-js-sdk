/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApiFail model module.
 * @module model/ApiFail
 * @version 2021-06-17
 */
class ApiFail {
    /**
     * Constructs a new <code>ApiFail</code>.
     * A generic failure returned by the API.
     * @alias module:model/ApiFail
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        ApiFail.initialize(this, status);
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
     * Constructs a <code>ApiFail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiFail} obj Optional instance to populate.
     * @return {module:model/ApiFail} The populated <code>ApiFail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiFail();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
ApiFail.prototype['status'] = undefined;






export default ApiFail;

