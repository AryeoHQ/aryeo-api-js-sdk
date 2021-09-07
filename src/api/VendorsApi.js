/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError403 from '../model/ApiError403';
import ApiError404 from '../model/ApiError404';
import ApiError500 from '../model/ApiError500';
import ApiFail422 from '../model/ApiFail422';
import GroupCollection from '../model/GroupCollection';
import GroupResource from '../model/GroupResource';

/**
* Vendors service.
* @module api/VendorsApi
* @version 2021-06-17
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
     * List all vendors.
     * Lists all vendors available to a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {module:api/VendorsApi~getVendorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupCollection}
     */
    getVendors(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = GroupCollection;
      return this.apiClient.callApi(
        '/vendors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getVendorsId operation.
     * @callback module:api/VendorsApi~getVendorsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a vendor.
     * Retrieves the details of a vendor with the given ID.
     * @param {String} vendorId The ID of the group that is associated as a vendor. UUID Version 4.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {module:api/VendorsApi~getVendorsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupResource}
     */
    getVendorsId(vendorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'vendorId' is set
      if (vendorId === undefined || vendorId === null) {
        throw new Error("Missing the required parameter 'vendorId' when calling getVendorsId");
      }

      let pathParams = {
        'vendor_id': vendorId
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
      let returnType = GroupResource;
      return this.apiClient.callApi(
        '/vendors/{vendor_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
