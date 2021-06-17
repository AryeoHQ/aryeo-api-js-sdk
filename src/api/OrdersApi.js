/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
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

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderCollection;
      return this.apiClient.callApi(
        '/orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OrderResource;
      return this.apiClient.callApi(
        '/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
