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
    instance = new Aryeo.Video();
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

  describe('Video', function() {
    it('should create an instance of Video', function() {
      // uncomment below and update the code to test Video
      //var instane = new Aryeo.Video();
      //expect(instance).to.be.a(Aryeo.Video);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property displayType (base name: "display_type")', function() {
      // uncomment below and update the code to test the property displayType
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property sourceType (base name: "source_type")', function() {
      // uncomment below and update the code to test the property sourceType
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnail_url")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property playbackUrl (base name: "playback_url")', function() {
      // uncomment below and update the code to test the property playbackUrl
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property downloadUrl (base name: "download_url")', function() {
      // uncomment below and update the code to test the property downloadUrl
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

    it('should have the property shareUrl (base name: "share_url")', function() {
      // uncomment below and update the code to test the property shareUrl
      //var instance = new Aryeo.Video();
      //expect(instance).to.be();
    });

  });

}));
