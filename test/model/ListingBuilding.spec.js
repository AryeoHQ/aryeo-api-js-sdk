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
    instance = new Aryeo.ListingBuilding();
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

  describe('ListingBuilding', function() {
    it('should create an instance of ListingBuilding', function() {
      // uncomment below and update the code to test ListingBuilding
      //var instane = new Aryeo.ListingBuilding();
      //expect(instance).to.be.a(Aryeo.ListingBuilding);
    });

    it('should have the property bedrooms (base name: "bedrooms")', function() {
      // uncomment below and update the code to test the property bedrooms
      //var instance = new Aryeo.ListingBuilding();
      //expect(instance).to.be();
    });

    it('should have the property bathrooms (base name: "bathrooms")', function() {
      // uncomment below and update the code to test the property bathrooms
      //var instance = new Aryeo.ListingBuilding();
      //expect(instance).to.be();
    });

    it('should have the property squareFeet (base name: "square_feet")', function() {
      // uncomment below and update the code to test the property squareFeet
      //var instance = new Aryeo.ListingBuilding();
      //expect(instance).to.be();
    });

    it('should have the property yearBuilt (base name: "year_built")', function() {
      // uncomment below and update the code to test the property yearBuilt
      //var instance = new Aryeo.ListingBuilding();
      //expect(instance).to.be();
    });

  });

}));
