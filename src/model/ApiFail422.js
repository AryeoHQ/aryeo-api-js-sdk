/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApiFail422 model module.
 * @module model/ApiFail422
 * @version 2021-06-17
 */
class ApiFail422 {
    /**
     * Constructs a new <code>ApiFail422</code>.
     * A processing or validation failure returned by the API.
     * @alias module:model/ApiFail422
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        ApiFail422.initialize(this, status);
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
     * Constructs a <code>ApiFail422</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiFail422} obj Optional instance to populate.
     * @return {module:model/ApiFail422} The populated <code>ApiFail422</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiFail422();

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
ApiFail422.prototype['status'] = undefined;






export default ApiFail422;

