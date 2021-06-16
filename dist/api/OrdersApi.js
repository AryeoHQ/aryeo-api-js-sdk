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
import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import OrderCollection from '../model/OrderCollection';
import OrderPostPayload from '../model/OrderPostPayload';
import OrderResource from '../model/OrderResource';
/**
* Orders service.
* @module api/OrdersApi
* @version 1.0.0
*/

export default class OrdersApi {
  /**
  * Constructs a new OrdersApi. 
  * @alias module:api/OrdersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the getOrders operation.
   * @callback module:api/OrdersApi~getOrdersCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OrderCollection} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get orders available to a group.
   * Get orders of a group.
   * @param {module:api/OrdersApi~getOrdersCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OrderCollection}
   */


  getOrders(callback) {
    let postBody = null;
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['JWT'];
    let contentTypes = [];
    let accepts = ['application/json'];
    let returnType = OrderCollection;
    return this.apiClient.callApi('/orders', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }
  /**
   * Callback function to receive the result of the postOrders operation.
   * @callback module:api/OrdersApi~postOrdersCallback
   * @param {String} error Error message, if any.
   * @param {module:model/OrderResource} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an order.
   * Create an order.
   * @param {Object} opts Optional parameters
   * @param {module:model/OrderPostPayload} opts.orderPostPayload 
   * @param {module:api/OrdersApi~postOrdersCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/OrderResource}
   */


  postOrders(opts, callback) {
    opts = opts || {};
    let postBody = opts['orderPostPayload'];
    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};
    let authNames = ['JWT'];
    let contentTypes = ['application/json'];
    let accepts = ['application/json'];
    let returnType = OrderResource;
    return this.apiClient.callApi('/orders', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
  }

}