/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import MarketingMaterialPublishPayload from '../model/MarketingMaterialPublishPayload';

/**
* MarketingMaterials service.
* @module api/MarketingMaterialsApi
* @version 1.0.0
*/
export default class MarketingMaterialsApi {

    /**
    * Constructs a new MarketingMaterialsApi. 
    * @alias module:api/MarketingMaterialsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the putMarketingMaterialsUuidPublish operation.
     * @callback module:api/MarketingMaterialsApi~putMarketingMaterialsUuidPublishCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish a marketing material.
     * Publish a marketing material.
     * @param {String} uuid UUID of the marketing material record.
     * @param {Object} opts Optional parameters
     * @param {module:model/MarketingMaterialPublishPayload} opts.marketingMaterialPublishPayload 
     * @param {module:api/MarketingMaterialsApi~putMarketingMaterialsUuidPublishCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putMarketingMaterialsUuidPublish(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['marketingMaterialPublishPayload'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling putMarketingMaterialsUuidPublish");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = null;
      return this.apiClient.callApi(
        '/marketing-materials/{uuid}/publish', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
