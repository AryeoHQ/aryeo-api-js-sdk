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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Aryeo);
  }
}(this, function(expect, Aryeo) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Aryeo.PartialAddress();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PartialAddress', function() {
    it('should create an instance of PartialAddress', function() {
      // uncomment below and update the code to test PartialAddress
      //var instane = new Aryeo.PartialAddress();
      //expect(instance).to.be.a(Aryeo.PartialAddress);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property fullAddress (base name: "full_address")', function() {
      // uncomment below and update the code to test the property fullAddress
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property formattedAddress1 (base name: "formatted_address_1")', function() {
      // uncomment below and update the code to test the property formattedAddress1
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property formattedAddress2 (base name: "formatted_address_2")', function() {
      // uncomment below and update the code to test the property formattedAddress2
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property placeId (base name: "place_id")', function() {
      // uncomment below and update the code to test the property placeId
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property addressLine1 (base name: "address_line_1")', function() {
      // uncomment below and update the code to test the property addressLine1
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property addressLine2 (base name: "address_line_2")', function() {
      // uncomment below and update the code to test the property addressLine2
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new Aryeo.PartialAddress();
      //expect(instance).to.be();
    });

  });

}));
