/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApiError403 model module.
 * @module model/ApiError403
 * @version 2021-06-17
 */
class ApiError403 {
    /**
     * Constructs a new <code>ApiError403</code>.
     * A forbidden error returned by the API.
     * @alias module:model/ApiError403
     * @param status {String} What was the state of the request?
     * @param message {String} The error message.
     */
    constructor(status, message) { 
        
        ApiError403.initialize(this, status, message);
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
     * Constructs a <code>ApiError403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError403} obj Optional instance to populate.
     * @return {module:model/ApiError403} The populated <code>ApiError403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError403();

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
ApiError403.prototype['status'] = undefined;

/**
 * The error message.
 * @member {String} message
 */
ApiError403.prototype['message'] = undefined;

/**
 * A numeric code corresponding to the error.
 * @member {Number} code
 */
ApiError403.prototype['code'] = undefined;






export default ApiError403;

