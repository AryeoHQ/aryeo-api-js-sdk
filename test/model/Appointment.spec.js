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
    instance = new Aryeo.Appointment();
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

  describe('Appointment', function() {
    it('should create an instance of Appointment', function() {
      // uncomment below and update the code to test Appointment
      //var instane = new Aryeo.Appointment();
      //expect(instance).to.be.a(Aryeo.Appointment);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property startAt (base name: "start_at")', function() {
      // uncomment below and update the code to test the property startAt
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property endAt (base name: "end_at")', function() {
      // uncomment below and update the code to test the property endAt
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new Aryeo.Appointment();
      //expect(instance).to.be();
    });

  });

}));
