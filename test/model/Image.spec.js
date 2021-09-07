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
    instance = new Aryeo.Image();
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

  describe('Image', function() {
    it('should create an instance of Image', function() {
      // uncomment below and update the code to test Image
      //var instance = new Aryeo.Image();
      //expect(instance).to.be.a(Aryeo.Image);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnail_url")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

    it('should have the property largeUrl (base name: "large_url")', function() {
      // uncomment below and update the code to test the property largeUrl
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

    it('should have the property originalUrl (base name: "original_url")', function() {
      // uncomment below and update the code to test the property originalUrl
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

    it('should have the property caption (base name: "caption")', function() {
      // uncomment below and update the code to test the property caption
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

    it('should have the property displayInGallery (base name: "display_in_gallery")', function() {
      // uncomment below and update the code to test the property displayInGallery
      //var instance = new Aryeo.Image();
      //expect(instance).to.be();
    });

  });

}));
