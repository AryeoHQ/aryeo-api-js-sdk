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
    instance = new Aryeo.OrderPostPayload();
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

  describe('OrderPostPayload', function() {
    it('should create an instance of OrderPostPayload', function() {
      // uncomment below and update the code to test OrderPostPayload
      //var instance = new Aryeo.OrderPostPayload();
      //expect(instance).to.be.a(Aryeo.OrderPostPayload);
    });

    it('should have the property fulfillmentStatus (base name: "fulfillment_status")', function() {
      // uncomment below and update the code to test the property fulfillmentStatus
      //var instance = new Aryeo.OrderPostPayload();
      //expect(instance).to.be();
    });

    it('should have the property paymentStatus (base name: "payment_status")', function() {
      // uncomment below and update the code to test the property paymentStatus
      //var instance = new Aryeo.OrderPostPayload();
      //expect(instance).to.be();
    });

    it('should have the property placeId (base name: "place_id")', function() {
      // uncomment below and update the code to test the property placeId
      //var instance = new Aryeo.OrderPostPayload();
      //expect(instance).to.be();
    });

  });

}));
