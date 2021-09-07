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
    instance = new Aryeo.InteractiveContent();
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

  describe('InteractiveContent', function() {
    it('should create an instance of InteractiveContent', function() {
      // uncomment below and update the code to test InteractiveContent
      //var instance = new Aryeo.InteractiveContent();
      //expect(instance).to.be.a(Aryeo.InteractiveContent);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.InteractiveContent();
      //expect(instance).to.be();
    });

    it('should have the property displayType (base name: "display_type")', function() {
      // uncomment below and update the code to test the property displayType
      //var instance = new Aryeo.InteractiveContent();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "content_type")', function() {
      // uncomment below and update the code to test the property contentType
      //var instance = new Aryeo.InteractiveContent();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new Aryeo.InteractiveContent();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnail_url")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new Aryeo.InteractiveContent();
      //expect(instance).to.be();
    });

  });

}));
