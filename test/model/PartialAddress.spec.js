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
