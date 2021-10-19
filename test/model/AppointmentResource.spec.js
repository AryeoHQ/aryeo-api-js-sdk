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
    instance = new Aryeo.AppointmentResource();
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

  describe('AppointmentResource', function() {
    it('should create an instance of AppointmentResource', function() {
      // uncomment below and update the code to test AppointmentResource
      //var instane = new Aryeo.AppointmentResource();
      //expect(instance).to.be.a(Aryeo.AppointmentResource);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Aryeo.AppointmentResource();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new Aryeo.AppointmentResource();
      //expect(instance).to.be();
    });

  });

}));
