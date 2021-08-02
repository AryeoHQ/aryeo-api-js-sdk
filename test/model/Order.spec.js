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
    instance = new Aryeo.Order();
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

  describe('Order', function() {
    it('should create an instance of Order', function() {
      // uncomment below and update the code to test Order
      //var instane = new Aryeo.Order();
      //expect(instance).to.be.a(Aryeo.Order);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property number (base name: "number")', function() {
      // uncomment below and update the code to test the property number
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentStatus (base name: "fulfillment_status")', function() {
      // uncomment below and update the code to test the property fulfillmentStatus
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property paymentStatus (base name: "payment_status")', function() {
      // uncomment below and update the code to test the property paymentStatus
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "total_amount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property paymentUrl (base name: "payment_url")', function() {
      // uncomment below and update the code to test the property paymentUrl
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

    it('should have the property statusUrl (base name: "status_url")', function() {
      // uncomment below and update the code to test the property statusUrl
      //var instance = new Aryeo.Order();
      //expect(instance).to.be();
    });

  });

}));
