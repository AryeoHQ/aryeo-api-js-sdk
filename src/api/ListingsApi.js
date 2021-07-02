/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import ListingResource from '../model/ListingResource';
import PartialListingCollection from '../model/PartialListingCollection';

/**
* Listings service.
* @module api/ListingsApi
* @version 1.0.0
*/
export default class ListingsApi {

    /**
    * Constructs a new ListingsApi. 
    * @alias module:api/ListingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getListings operation.
     * @callback module:api/ListingsApi~getListingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PartialListingCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the listings available to a group.
     * Get the listings available to a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A search query.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {module:model/String} opts.status The status you want to scope down to, example sold,  coming_soon,  for_sale, sold
     * @param {Number} opts.price The price value and greater will be returned.
     * @param {Number} opts.bathrooms Number of bathrooms minimum.
     * @param {Number} opts.bedrooms Number of bedrooms minimum.
     * @param {module:api/ListingsApi~getListingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PartialListingCollection}
     */
    getListings(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'query': opts['query'],
        'per_page': opts['perPage'],
        'page': opts['page'],
        'status': opts['status'],
        'price': opts['price'],
        'bathrooms': opts['bathrooms'],
        'bedrooms': opts['bedrooms']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWT'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PartialListingCollection;
      return this.apiClient.callApi(
        '/listings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getListingsId operation.
     * @callback module:api/ListingsApi~getListingsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListingResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about a listing.
     * Get information about a listing.
     * @param {String} uuid The UUID of a listing.
     * @param {module:api/ListingsApi~getListingsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListingResource}
     */
    getListingsId(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getListingsId");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListingResource;
      return this.apiClient.callApi(
        '/listings/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
