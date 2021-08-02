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
    instance = new Aryeo.ListingLot();
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

  describe('ListingLot', function() {
    it('should create an instance of ListingLot', function() {
      // uncomment below and update the code to test ListingLot
      //var instane = new Aryeo.ListingLot();
      //expect(instance).to.be.a(Aryeo.ListingLot);
    });

    it('should have the property sizeAcres (base name: "size_acres")', function() {
      // uncomment below and update the code to test the property sizeAcres
      //var instance = new Aryeo.ListingLot();
      //expect(instance).to.be();
    });

    it('should have the property openParkingSpaces (base name: "open_parking_spaces")', function() {
      // uncomment below and update the code to test the property openParkingSpaces
      //var instance = new Aryeo.ListingLot();
      //expect(instance).to.be();
    });

  });

}));
