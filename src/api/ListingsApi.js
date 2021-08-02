/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError from '../model/ApiError';
import ApiFail from '../model/ApiFail';
import ListingCollection from '../model/ListingCollection';
import ListingResource from '../model/ListingResource';

/**
* Listings service.
* @module api/ListingsApi
* @version 2021-06-17
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
     * @param {module:model/ListingCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the listings available to a group.
     * Get the listings available to a group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {String} opts.filterSearch Return listings that have fields matching this term.
     * @param {String} opts.filterAddress Return listings that have an address matching this term.
     * @param {String} opts.filterListAgent Return listings that have a listing agent or co-listing agent matching this term.
     * @param {module:model/String} opts.filterStatus Return listings that have a certain status.
     * @param {Boolean} opts.filterActive Set as true to return listings that have an active status (e.g. active statuses include `COMING_SOON`, `FOR_SALE`, `FOR_LEASE`, `PENDING_SALE`, `PENDING_LEASE`, `SOLD`, `LEASED`). 
     * @param {Number} opts.filterPriceGte Return listings where the price field is greater than or equal to this value.
     * @param {Number} opts.filterPriceLte Return listings where the price field is less than or equal to this value.
     * @param {Number} opts.filterSquareFeetGte Return listings where the square feet field is greater than or equal to this value.
     * @param {Number} opts.filterSquareFeetLte Return listings where the square feet field is less than or equal to this value.
     * @param {Number} opts.filterBedroomsGte Return listings where the bedrooms field is greater than or equal to this value.
     * @param {Number} opts.filterBedroomsLte Return listings where the bedrooms field is less than or equal to this value.
     * @param {Number} opts.filterBathroomsGte Return listings where the bathrooms field is greater than or equal to this value.
     * @param {Number} opts.filterBathroomsLte Return listings where the bathrooms field is less than or equal to this value.
     * @param {String} opts.sort Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-created_at`.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {module:api/ListingsApi~getListingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListingCollection}
     */
    getListings(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'include': opts['include'],
        'filter[search]': opts['filterSearch'],
        'filter[address]': opts['filterAddress'],
        'filter[list_agent]': opts['filterListAgent'],
        'filter[status]': opts['filterStatus'],
        'filter[active]': opts['filterActive'],
        'filter[price_gte]': opts['filterPriceGte'],
        'filter[price_lte]': opts['filterPriceLte'],
        'filter[square_feet_gte]': opts['filterSquareFeetGte'],
        'filter[square_feet_lte]': opts['filterSquareFeetLte'],
        'filter[bedrooms_gte]': opts['filterBedroomsGte'],
        'filter[bedrooms_lte]': opts['filterBedroomsLte'],
        'filter[bathrooms_gte]': opts['filterBathroomsGte'],
        'filter[bathrooms_lte]': opts['filterBathroomsLte'],
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
      let returnType = ListingCollection;
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
     * @param {String} listingId The ID of a listing.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {module:api/ListingsApi~getListingsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListingResource}
     */
    getListingsId(listingId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listingId' is set
      if (listingId === undefined || listingId === null) {
        throw new Error("Missing the required parameter 'listingId' when calling getListingsId");
      }

      let pathParams = {
        'listing_id': listingId
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
      let returnType = ListingResource;
      return this.apiClient.callApi(
        '/listings/{listing_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
