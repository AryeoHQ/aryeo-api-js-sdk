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
    instance = new Aryeo.GroupAgentProperties();
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

  describe('GroupAgentProperties', function() {
    it('should create an instance of GroupAgentProperties', function() {
      // uncomment below and update the code to test GroupAgentProperties
      //var instane = new Aryeo.GroupAgentProperties();
      //expect(instance).to.be.a(Aryeo.GroupAgentProperties);
    });

    it('should have the property brokerageName (base name: "brokerage_name")', function() {
      // uncomment below and update the code to test the property brokerageName
      //var instance = new Aryeo.GroupAgentProperties();
      //expect(instance).to.be();
    });

    it('should have the property agentLicenseNumber (base name: "agent_license_number")', function() {
      // uncomment below and update the code to test the property agentLicenseNumber
      //var instance = new Aryeo.GroupAgentProperties();
      //expect(instance).to.be();
    });

    it('should have the property agentAvatar (base name: "agent_avatar")', function() {
      // uncomment below and update the code to test the property agentAvatar
      //var instance = new Aryeo.GroupAgentProperties();
      //expect(instance).to.be();
    });

  });

}));
