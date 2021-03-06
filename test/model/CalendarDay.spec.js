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
    instance = new Aryeo.CalendarDay();
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

  describe('CalendarDay', function() {
    it('should create an instance of CalendarDay', function() {
      // uncomment below and update the code to test CalendarDay
      //var instane = new Aryeo.CalendarDay();
      //expect(instance).to.be.a(Aryeo.CalendarDay);
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new Aryeo.CalendarDay();
      //expect(instance).to.be();
    });

    it('should have the property isAvailable (base name: "is_available")', function() {
      // uncomment below and update the code to test the property isAvailable
      //var instance = new Aryeo.CalendarDay();
      //expect(instance).to.be();
    });

  });

}));
