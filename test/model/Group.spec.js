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
    instance = new Aryeo.Group();
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

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instane = new Aryeo.Group();
      //expect(instance).to.be.a(Aryeo.Group);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property groupType (base name: "group_type")', function() {
      // uncomment below and update the code to test the property groupType
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property website (base name: "website")', function() {
      // uncomment below and update the code to test the property website
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property isBrokerageOrBrokerageAgent (base name: "is_brokerage_or_brokerage_agent")', function() {
      // uncomment below and update the code to test the property isBrokerageOrBrokerageAgent
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property socialProfiles (base name: "social_profiles")', function() {
      // uncomment below and update the code to test the property socialProfiles
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property agentProperties (base name: "agent_properties")', function() {
      // uncomment below and update the code to test the property agentProperties
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property users (base name: "users")', function() {
      // uncomment below and update the code to test the property users
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property defaultOrderForm (base name: "default_order_form")', function() {
      // uncomment below and update the code to test the property defaultOrderForm
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

    it('should have the property orderForms (base name: "order_forms")', function() {
      // uncomment below and update the code to test the property orderForms
      //var instance = new Aryeo.Group();
      //expect(instance).to.be();
    });

  });

}));
