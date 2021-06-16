/*
 * Aryeo
 * # Introduction The Aryeo API gives access to the Aryeo platform. You can use your favorite HTTP/REST library for interfacing with the Aryeo API, or you can use one of our SDKs. Our SDKs are procedurally generated and a great starting point for experimental testing. If there is an additional language or framework that you want to see supported, then please reach and out and make a contribution!  <p align=\"center\"> <a href=\"https://github.com/AryeoHQ/aryeo-api-dart-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/dart.svg\" alt=\"Dart\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-go-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/go.svg\" alt=\"Go\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-js-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/js.svg\" alt=\"Node JS\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-php-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/php.svg\" alt=\"PHP\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-ruby-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/ruby.svg\" alt=\"Ruby\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-rust-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/rust.svg\" alt=\"Rust\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-swift-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/swift.svg\" alt=\"Swift\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> </p>  **Note**: Some SDKs may require you to manually add the `Accept` header to all Aryeo API requests. If so, use the value `application/json`.  # Authentication To start using the Aryeo API, you will need to generate an API key from your group's developer settings. You can then authenticate to the Aryeo API by providing your key in the appropriate request header. Requests made without an API key will result in a `401 Unauthorized` error. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jarrod@aryeo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Aryeo);
  }
}(this, function(expect, Aryeo) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PartialListing', function() {
      beforeEach(function() {
        instance = new Aryeo.PartialListing();
      });

      it('should create an instance of PartialListing', function() {
        // TODO: update the code to test PartialListing
        expect(instance).to.be.a(Aryeo.PartialListing);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryStatus (base name: "delivery_status")', function() {
        // TODO: update the code to test the property deliveryStatus
        expect(instance).to.have.property('deliveryStatus');
        // expect(instance.deliveryStatus).to.be(expectedValueLiteral);
      });

      it('should have the property thumbnailUrl (base name: "thumbnail_url")', function() {
        // TODO: update the code to test the property thumbnailUrl
        expect(instance).to.have.property('thumbnailUrl');
        // expect(instance.thumbnailUrl).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property brandedUrl (base name: "branded_url")', function() {
        // TODO: update the code to test the property brandedUrl
        expect(instance).to.have.property('brandedUrl');
        // expect(instance.brandedUrl).to.be(expectedValueLiteral);
      });

      it('should have the property squareFeet (base name: "square_feet")', function() {
        // TODO: update the code to test the property squareFeet
        expect(instance).to.have.property('squareFeet');
        // expect(instance.squareFeet).to.be(expectedValueLiteral);
      });

      it('should have the property bedrooms (base name: "bedrooms")', function() {
        // TODO: update the code to test the property bedrooms
        expect(instance).to.have.property('bedrooms');
        // expect(instance.bedrooms).to.be(expectedValueLiteral);
      });

      it('should have the property bathrooms (base name: "bathrooms")', function() {
        // TODO: update the code to test the property bathrooms
        expect(instance).to.have.property('bathrooms');
        // expect(instance.bathrooms).to.be(expectedValueLiteral);
      });

      it('should have the property downloadsEnabled (base name: "downloads_enabled")', function() {
        // TODO: update the code to test the property downloadsEnabled
        expect(instance).to.have.property('downloadsEnabled');
        // expect(instance.downloadsEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property propertyDetails (base name: "property_details")', function() {
        // TODO: update the code to test the property propertyDetails
        expect(instance).to.have.property('propertyDetails');
        // expect(instance.propertyDetails).to.be(expectedValueLiteral);
      });

      it('should have the property agent (base name: "agent")', function() {
        // TODO: update the code to test the property agent
        expect(instance).to.have.property('agent');
        // expect(instance.agent).to.be(expectedValueLiteral);
      });

      it('should have the property coAgent (base name: "co_agent")', function() {
        // TODO: update the code to test the property coAgent
        expect(instance).to.have.property('coAgent');
        // expect(instance.coAgent).to.be(expectedValueLiteral);
      });

    });
  });

}));
