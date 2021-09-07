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
    instance = new Aryeo.AppointmentReschedulePutPayload();
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

  describe('AppointmentReschedulePutPayload', function() {
    it('should create an instance of AppointmentReschedulePutPayload', function() {
      // uncomment below and update the code to test AppointmentReschedulePutPayload
      //var instance = new Aryeo.AppointmentReschedulePutPayload();
      //expect(instance).to.be.a(Aryeo.AppointmentReschedulePutPayload);
    });

    it('should have the property startAt (base name: "start_at")', function() {
      // uncomment below and update the code to test the property startAt
      //var instance = new Aryeo.AppointmentReschedulePutPayload();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new Aryeo.AppointmentReschedulePutPayload();
      //expect(instance).to.be();
    });

    it('should have the property notifyCustomer (base name: "notify_customer")', function() {
      // uncomment below and update the code to test the property notifyCustomer
      //var instance = new Aryeo.AppointmentReschedulePutPayload();
      //expect(instance).to.be();
    });

  });

}));
