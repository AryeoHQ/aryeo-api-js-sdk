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
    instance = new Aryeo.MarketingMaterialPublishPayload();
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

  describe('MarketingMaterialPublishPayload', function() {
    it('should create an instance of MarketingMaterialPublishPayload', function() {
      // uncomment below and update the code to test MarketingMaterialPublishPayload
      //var instane = new Aryeo.MarketingMaterialPublishPayload();
      //expect(instance).to.be.a(Aryeo.MarketingMaterialPublishPayload);
    });

    it('should have the property polotnoJson (base name: "polotno_json")', function() {
      // uncomment below and update the code to test the property polotnoJson
      //var instance = new Aryeo.MarketingMaterialPublishPayload();
      //expect(instance).to.be();
    });

  });

}));
