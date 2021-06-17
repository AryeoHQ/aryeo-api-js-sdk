/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
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
    instance = new Aryeo.PartialListing();
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

  describe('PartialListing', function() {
    it('should create an instance of PartialListing', function() {
      // uncomment below and update the code to test PartialListing
      //var instane = new Aryeo.PartialListing();
      //expect(instance).to.be.a(Aryeo.PartialListing);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatus (base name: "delivery_status")', function() {
      // uncomment below and update the code to test the property deliveryStatus
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnail_url")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property brandedUrl (base name: "branded_url")', function() {
      // uncomment below and update the code to test the property brandedUrl
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property squareFeet (base name: "square_feet")', function() {
      // uncomment below and update the code to test the property squareFeet
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property bedrooms (base name: "bedrooms")', function() {
      // uncomment below and update the code to test the property bedrooms
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property bathrooms (base name: "bathrooms")', function() {
      // uncomment below and update the code to test the property bathrooms
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property downloadsEnabled (base name: "downloads_enabled")', function() {
      // uncomment below and update the code to test the property downloadsEnabled
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property propertyDetails (base name: "property_details")', function() {
      // uncomment below and update the code to test the property propertyDetails
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property agent (base name: "agent")', function() {
      // uncomment below and update the code to test the property agent
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

    it('should have the property coAgent (base name: "co_agent")', function() {
      // uncomment below and update the code to test the property coAgent
      //var instance = new Aryeo.PartialListing();
      //expect(instance).to.be();
    });

  });

}));
