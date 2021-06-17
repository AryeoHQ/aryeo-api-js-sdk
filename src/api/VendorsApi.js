/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import GroupCollection from '../model/GroupCollection';

/**
* Vendors service.
* @module api/VendorsApi
* @version 1.0.0
*/
export default class VendorsApi {

    /**
    * Constructs a new VendorsApi. 
    * @alias module:api/VendorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getVendors operation.
     * @callback module:api/VendorsApi~getVendorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vendors available to a group.
     * Get vendors available to a group.
     * @param {module:api/VendorsApi~getVendorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupCollection}
     */
    getVendors(callback) {
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
      let returnType = GroupCollection;
      return this.apiClient.callApi(
        '/vendors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorsSearch operation.
     * @callback module:api/VendorsApi~getVendorsSearchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get vendors that can be added to the group's vendor list.
     * Get vendors that can be added to the group's vendor list, excluding those already available to a group. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A search query.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {module:api/VendorsApi~getVendorsSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupCollection}
     */
    getVendorsSearch(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'query': opts['query'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupCollection;
      return this.apiClient.callApi(
        '/vendors/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
