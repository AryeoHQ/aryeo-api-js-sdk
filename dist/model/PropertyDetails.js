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
 * The PropertyDetails model module.
 * @module model/PropertyDetails
 * @version 1.0.0
 */

class PropertyDetails {
  /**
   * Constructs a new <code>PropertyDetails</code>.
   * Details about a real-estate listing.
   * @alias module:model/PropertyDetails
   */
  constructor() {
    PropertyDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>PropertyDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PropertyDetails} obj Optional instance to populate.
   * @return {module:model/PropertyDetails} The populated <code>PropertyDetails</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PropertyDetails();

      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }

      if (data.hasOwnProperty('mls_number')) {
        obj['mls_number'] = ApiClient.convertToType(data['mls_number'], 'String');
      }

      if (data.hasOwnProperty('bedrooms')) {
        obj['bedrooms'] = ApiClient.convertToType(data['bedrooms'], 'Number');
      }

      if (data.hasOwnProperty('bathrooms')) {
        obj['bathrooms'] = ApiClient.convertToType(data['bathrooms'], 'Number');
      }

      if (data.hasOwnProperty('square_feet')) {
        obj['square_feet'] = ApiClient.convertToType(data['square_feet'], 'Number');
      }

      if (data.hasOwnProperty('lot_acres')) {
        obj['lot_acres'] = ApiClient.convertToType(data['lot_acres'], 'Number');
      }

      if (data.hasOwnProperty('parking_spots')) {
        obj['parking_spots'] = ApiClient.convertToType(data['parking_spots'], 'Number');
      }

      if (data.hasOwnProperty('year_built')) {
        obj['year_built'] = ApiClient.convertToType(data['year_built'], 'Number');
      }

      if (data.hasOwnProperty('property_type')) {
        obj['property_type'] = ApiClient.convertToType(data['property_type'], 'String');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }

    return obj;
  }

}
/**
 * The price of the property in dollars.
 * @member {Number} price
 */


PropertyDetails.prototype['price'] = undefined;
/**
 * A number assigned to a real-estate listing for the purposes of information sharing.
 * @member {String} mls_number
 */

PropertyDetails.prototype['mls_number'] = undefined;
/**
 * Number of bedrooms.
 * @member {Number} bedrooms
 */

PropertyDetails.prototype['bedrooms'] = undefined;
/**
 * Number of bathrooms. Represented as a number in order to support half-baths.
 * @member {Number} bathrooms
 */

PropertyDetails.prototype['bathrooms'] = undefined;
/**
 * Total number of square feet.
 * @member {Number} square_feet
 */

PropertyDetails.prototype['square_feet'] = undefined;
/**
 * Total acres.
 * @member {Number} lot_acres
 */

PropertyDetails.prototype['lot_acres'] = undefined;
/**
 * Number of parking spaces.
 * @member {Number} parking_spots
 */

PropertyDetails.prototype['parking_spots'] = undefined;
/**
 * Year the property was built.
 * @member {Number} year_built
 */

PropertyDetails.prototype['year_built'] = undefined;
/**
 * Type of property.
 * @member {module:model/PropertyDetails.PropertyTypeEnum} property_type
 */

PropertyDetails.prototype['property_type'] = undefined;
/**
 * Property description.
 * @member {String} description
 */

PropertyDetails.prototype['description'] = undefined;
/**
 * Allowed values for the <code>property_type</code> property.
 * @enum {String}
 * @readonly
 */

PropertyDetails['PropertyTypeEnum'] = {
  /**
   * value: "Single Family"
   * @const
   */
  "Single Family": "Single Family",

  /**
   * value: "Single Family Attached"
   * @const
   */
  "Single Family Attached": "Single Family Attached",

  /**
   * value: "Single Family Detached"
   * @const
   */
  "Single Family Detached": "Single Family Detached",

  /**
   * value: "Colonial"
   * @const
   */
  "Colonial": "Colonial",

  /**
   * value: "Condo"
   * @const
   */
  "Condo": "Condo",

  /**
   * value: "Townhome"
   * @const
   */
  "Townhome": "Townhome",

  /**
   * value: "Twinhome"
   * @const
   */
  "Twinhome": "Twinhome",

  /**
   * value: "Duplex"
   * @const
   */
  "Duplex": "Duplex",

  /**
   * value: "Lot"
   * @const
   */
  "Lot": "Lot",

  /**
   * value: "Land"
   * @const
   */
  "Land": "Land",

  /**
   * value: "Manufactured Home"
   * @const
   */
  "Manufactured Home": "Manufactured Home",

  /**
   * value: "Semi-Detached"
   * @const
   */
  "Semi-Detached": "Semi-Detached",

  /**
   * value: "Rental"
   * @const
   */
  "Rental": "Rental",

  /**
   * value: "Row House"
   * @const
   */
  "Row House": "Row House",

  /**
   * value: "Horse Farm"
   * @const
   */
  "Horse Farm": "Horse Farm",

  /**
   * value: "Other"
   * @const
   */
  "Other": "Other"
};
export default PropertyDetails;