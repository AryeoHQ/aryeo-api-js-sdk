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
    instance = new Aryeo.PropertyWebsite();
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

  describe('PropertyWebsite', function() {
    it('should create an instance of PropertyWebsite', function() {
      // uncomment below and update the code to test PropertyWebsite
      //var instane = new Aryeo.PropertyWebsite();
      //expect(instance).to.be.a(Aryeo.PropertyWebsite);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.PropertyWebsite();
      //expect(instance).to.be();
    });

    it('should have the property brandedUrl (base name: "branded_url")', function() {
      // uncomment below and update the code to test the property brandedUrl
      //var instance = new Aryeo.PropertyWebsite();
      //expect(instance).to.be();
    });

    it('should have the property unbrandedUrl (base name: "unbranded_url")', function() {
      // uncomment below and update the code to test the property unbrandedUrl
      //var instance = new Aryeo.PropertyWebsite();
      //expect(instance).to.be();
    });

  });

}));
