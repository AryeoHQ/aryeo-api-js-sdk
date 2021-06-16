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
import PartialAddress from './PartialAddress';
import PartialGroup from './PartialGroup';
import PropertyDetails from './PropertyDetails';
/**
 * The PartialListing model module.
 * @module model/PartialListing
 * @version 1.0.0
 */

class PartialListing {
  /**
   * Constructs a new <code>PartialListing</code>.
   * A real-estate property.
   * @alias module:model/PartialListing
   * @param id {String} ID of the listing.
   * @param address {module:model/PartialAddress} 
   * @param deliveryStatus {module:model/PartialListing.DeliveryStatusEnum} Has the listing been delivered?
   * @param downloadsEnabled {Boolean} Are downloads enabled for this listing?
   */
  constructor(id, address, deliveryStatus, downloadsEnabled) {
    PartialListing.initialize(this, id, address, deliveryStatus, downloadsEnabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj, id, address, deliveryStatus, downloadsEnabled) {
    obj['id'] = id;
    obj['address'] = address;
    obj['delivery_status'] = deliveryStatus;
    obj['downloads_enabled'] = downloadsEnabled;
  }
  /**
   * Constructs a <code>PartialListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialListing} obj Optional instance to populate.
   * @return {module:model/PartialListing} The populated <code>PartialListing</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartialListing();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('address')) {
        obj['address'] = PartialAddress.constructFromObject(data['address']);
      }

      if (data.hasOwnProperty('delivery_status')) {
        obj['delivery_status'] = ApiClient.convertToType(data['delivery_status'], 'String');
      }

      if (data.hasOwnProperty('thumbnail_url')) {
        obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
      }

      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }

      if (data.hasOwnProperty('branded_url')) {
        obj['branded_url'] = ApiClient.convertToType(data['branded_url'], 'String');
      }

      if (data.hasOwnProperty('square_feet')) {
        obj['square_feet'] = ApiClient.convertToType(data['square_feet'], 'Number');
      }

      if (data.hasOwnProperty('bedrooms')) {
        obj['bedrooms'] = ApiClient.convertToType(data['bedrooms'], 'Number');
      }

      if (data.hasOwnProperty('bathrooms')) {
        obj['bathrooms'] = ApiClient.convertToType(data['bathrooms'], 'Number');
      }

      if (data.hasOwnProperty('downloads_enabled')) {
        obj['downloads_enabled'] = ApiClient.convertToType(data['downloads_enabled'], 'Boolean');
      }

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }

      if (data.hasOwnProperty('property_details')) {
        obj['property_details'] = PropertyDetails.constructFromObject(data['property_details']);
      }

      if (data.hasOwnProperty('agent')) {
        obj['agent'] = PartialGroup.constructFromObject(data['agent']);
      }

      if (data.hasOwnProperty('co_agent')) {
        obj['co_agent'] = PartialGroup.constructFromObject(data['co_agent']);
      }
    }

    return obj;
  }

}
/**
 * ID of the listing.
 * @member {String} id
 */


PartialListing.prototype['id'] = undefined;
/**
 * @member {module:model/PartialAddress} address
 */

PartialListing.prototype['address'] = undefined;
/**
 * Has the listing been delivered?
 * @member {module:model/PartialListing.DeliveryStatusEnum} delivery_status
 */

PartialListing.prototype['delivery_status'] = undefined;
/**
 * Thumbnail URL for the listing.
 * @member {String} thumbnail_url
 */

PartialListing.prototype['thumbnail_url'] = undefined;
/**
 * The price of the property in dollars.
 * @member {Number} price
 */

PartialListing.prototype['price'] = undefined;
/**
 * URL for branded property website.
 * @member {String} branded_url
 */

PartialListing.prototype['branded_url'] = undefined;
/**
 * Total number of square feet.
 * @member {Number} square_feet
 */

PartialListing.prototype['square_feet'] = undefined;
/**
 * Number of bedrooms.
 * @member {Number} bedrooms
 */

PartialListing.prototype['bedrooms'] = undefined;
/**
 * Number of bathrooms.
 * @member {Number} bathrooms
 */

PartialListing.prototype['bathrooms'] = undefined;
/**
 * Are downloads enabled for this listing?
 * @member {Boolean} downloads_enabled
 */

PartialListing.prototype['downloads_enabled'] = undefined;
/**
 * Sales status for the listing.
 * @member {module:model/PartialListing.StatusEnum} status
 */

PartialListing.prototype['status'] = undefined;
/**
 * @member {module:model/PropertyDetails} property_details
 */

PartialListing.prototype['property_details'] = undefined;
/**
 * @member {module:model/PartialGroup} agent
 */

PartialListing.prototype['agent'] = undefined;
/**
 * @member {module:model/PartialGroup} co_agent
 */

PartialListing.prototype['co_agent'] = undefined;
/**
 * Allowed values for the <code>delivery_status</code> property.
 * @enum {String}
 * @readonly
 */

PartialListing['DeliveryStatusEnum'] = {
  /**
   * value: "delivered"
   * @const
   */
  "delivered": "delivered",

  /**
   * value: "undelivered"
   * @const
   */
  "undelivered": "undelivered"
};
/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */

PartialListing['StatusEnum'] = {
  /**
   * value: "Off Market"
   * @const
   */
  "Off Market": "Off Market",

  /**
   * value: "Pending Lease"
   * @const
   */
  "Pending Lease": "Pending Lease",

  /**
   * value: "Vacation Rental"
   * @const
   */
  "Vacation Rental": "Vacation Rental",

  /**
   * value: "Leased"
   * @const
   */
  "Leased": "Leased",

  /**
   * value: "For Sale"
   * @const
   */
  "For Sale": "For Sale",

  /**
   * value: "Draft"
   * @const
   */
  "Draft": "Draft",

  /**
   * value: "Coming Soon"
   * @const
   */
  "Coming Soon": "Coming Soon",

  /**
   * value: "Soldm"
   * @const
   */
  "Soldm": "Soldm",

  /**
   * value: "NULL"
   * @const
   */
  "NULL": "NULL",

  /**
   * value: "For Lease"
   * @const
   */
  "For Lease": "For Lease",

  /**
   * value: "Pending Sale"
   * @const
   */
  "Pending Sale": "Pending Sale",

  /**
   * value: "Price Reduction"
   * @const
   */
  "Price Reduction": "Price Reduction",

  /**
   * value: "Sold"
   * @const
   */
  "Sold": "Sold"
};
export default PartialListing;