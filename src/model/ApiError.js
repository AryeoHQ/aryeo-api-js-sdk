/**
 * Aryeo
 * # Introduction The Aryeo API gives access to the Aryeo platform. You can use your favorite HTTP/REST library for interfacing with the Aryeo API, or you can use one of our SDKs. Our SDKs are procedurally generated and a great starting point for experimental testing. If there is an additional language or framework that you want to see supported, then please reach and out and make a contribution!  <p align=\"center\"> <a href=\"https://github.com/AryeoHQ/aryeo-api-dart-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/dart.svg\" alt=\"Dart\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-go-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/go.svg\" alt=\"Go\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-js-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/js.svg\" alt=\"Node JS\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-php-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/php.svg\" alt=\"PHP\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-ruby-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/ruby.svg\" alt=\"Ruby\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-rust-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/rust.svg\" alt=\"Rust\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-swift-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/swift.svg\" alt=\"Swift\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> </p>  **Note**: Some SDKs may require you to manually add the `Accept` header to all Aryeo API requests. If so, use the value `application/json`.  # Authentication To start using the Aryeo API, you will need to generate an API key from your group's developer settings. You can then authenticate to the Aryeo API by providing your key in the appropriate request header. Requests made without an API key will result in a `401 Unauthorized` error. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: jarrod@aryeo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ApiError model module.
 * @module model/ApiError
 * @version 1.0.0
 */
class ApiError {
    /**
     * Constructs a new <code>ApiError</code>.
     * A generic error returned by the API.
     * @alias module:model/ApiError
     * @param message {String} The error message.
     */
    constructor(message) { 
        
        ApiError.initialize(this, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, message) { 
        obj['message'] = message;
    }

    /**
     * Constructs a <code>ApiError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiError} obj Optional instance to populate.
     * @return {module:model/ApiError} The populated <code>ApiError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiError();

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The error message.
 * @member {String} message
 */
ApiError.prototype['message'] = undefined;






export default ApiError;

