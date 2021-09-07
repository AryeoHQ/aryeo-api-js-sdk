/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApiError409 model module.
 * @module model/ApiError409
 * @version 2021-06-17
 */
class ApiError409 {
    /**
     * Constructs a new <code>ApiError409</code>.
     * A conflict error returned by the API.
     * @alias module:model/ApiError409
     * @param status {String} What was the state of the request?
     * @param message {String} The error message.
     */
    constructor(status, message) { 
        
        ApiError409.initialize(this, status, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, message) { 
        obj['status'] = status;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>ApiError409</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError409} obj Optional instance to populate.
     * @return {module:model/ApiError409} The populated <code>ApiError409</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError409();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
ApiError409.prototype['status'] = undefined;

/**
 * The error message.
 * @member {String} message
 */
ApiError409.prototype['message'] = undefined;

/**
 * A numeric code corresponding to the error.
 * @member {Number} code
 */
ApiError409.prototype['code'] = undefined;






export default ApiError409;

