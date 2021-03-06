/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError403 from '../model/ApiError403';
import ApiError404 from '../model/ApiError404';
import ApiError409 from '../model/ApiError409';
import ApiError500 from '../model/ApiError500';
import ApiFail422 from '../model/ApiFail422';
import OrderCollection from '../model/OrderCollection';
import OrderPostPayload from '../model/OrderPostPayload';
import OrderResource from '../model/OrderResource';
import ProductCollection from '../model/ProductCollection';

/**
* Orders service.
* @module api/OrdersApi
* @version 2021-06-17
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
     * List all orders.
     * Lists all orders of a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-created_at`.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {module:api/OrdersApi~getOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderCollection}
     */
    getOrders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sort': opts['sort'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
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
     * Callback function to receive the result of the getOrdersId operation.
     * @callback module:api/OrdersApi~getOrdersIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrderResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an order.
     * Retrieves the details of an order with the given ID.
     * @param {String} orderId The ID of an order. UUID Version 4.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {module:api/OrdersApi~getOrdersIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrderResource}
     */
    getOrdersId(orderId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrdersId");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrderResource;
      return this.apiClient.callApi(
        '/orders/{order_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProducts operation.
     * @callback module:api/OrdersApi~getProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProductCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all products.
     * List all products of a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.sort Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `title`.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {String} opts.filterSearch Return products that have fields matching this term.
     * @param {Boolean} opts.filterIncludeInactive Include inactive products (in addition to active products) when returning products.
     * @param {Array.<String>} opts.filterCategoryIds Return products in the given categories.
     * @param {String} opts.filterType Return products matching the given type. Allowed values are: MAIN, ADDON.
     * @param {module:api/OrdersApi~getProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProductCollection}
     */
    getProducts(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'sort': opts['sort'],
        'per_page': opts['perPage'],
        'page': opts['page'],
        'filter[search]': opts['filterSearch'],
        'filter[include_inactive]': opts['filterIncludeInactive'],
        'filter[category_ids]': this.apiClient.buildCollectionParam(opts['filterCategoryIds'], 'multi'),
        'filter[type]': opts['filterType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductCollection;
      return this.apiClient.callApi(
        '/products', 'GET',
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
     * @param {module:model/OrderPostPayload} opts.orderPostPayload OrderPostPayload
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

      let authNames = ['Token'];
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
