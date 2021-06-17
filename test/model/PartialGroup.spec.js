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
    instance = new Aryeo.PartialGroup();
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

  describe('PartialGroup', function() {
    it('should create an instance of PartialGroup', function() {
      // uncomment below and update the code to test PartialGroup
      //var instane = new Aryeo.PartialGroup();
      //expect(instance).to.be.a(Aryeo.PartialGroup);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

    it('should have the property groupType (base name: "group_type")', function() {
      // uncomment below and update the code to test the property groupType
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

    it('should have the property isBrokerageOrBrokerageAgent (base name: "is_brokerage_or_brokerage_agent")', function() {
      // uncomment below and update the code to test the property isBrokerageOrBrokerageAgent
      //var instance = new Aryeo.PartialGroup();
      //expect(instance).to.be();
    });

  });

}));
