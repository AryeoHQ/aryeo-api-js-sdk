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
    instance = new Aryeo.Address();
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

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instane = new Aryeo.Address();
      //expect(instance).to.be.a(Aryeo.Address);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetNumber (base name: "street_number")', function() {
      // uncomment below and update the code to test the property streetNumber
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "street_name")', function() {
      // uncomment below and update the code to test the property streetName
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property unitNumber (base name: "unit_number")', function() {
      // uncomment below and update the code to test the property unitNumber
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property cityRegion (base name: "city_region")', function() {
      // uncomment below and update the code to test the property cityRegion
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property countyOrParish (base name: "county_or_parish")', function() {
      // uncomment below and update the code to test the property countyOrParish
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property stateOrProvince (base name: "state_or_province")', function() {
      // uncomment below and update the code to test the property stateOrProvince
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property stateOrProvinceRegion (base name: "state_or_province_region")', function() {
      // uncomment below and update the code to test the property stateOrProvinceRegion
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property countryRegion (base name: "country_region")', function() {
      // uncomment below and update the code to test the property countryRegion
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property unparsedAddress (base name: "unparsed_address")', function() {
      // uncomment below and update the code to test the property unparsedAddress
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property unparsedAddressPartOne (base name: "unparsed_address_part_one")', function() {
      // uncomment below and update the code to test the property unparsedAddressPartOne
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

    it('should have the property unparsedAddressPartTwo (base name: "unparsed_address_part_two")', function() {
      // uncomment below and update the code to test the property unparsedAddressPartTwo
      //var instance = new Aryeo.Address();
      //expect(instance).to.be();
    });

  });

}));
