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
    instance = new Aryeo.SocialProfiles();
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

  describe('SocialProfiles', function() {
    it('should create an instance of SocialProfiles', function() {
      // uncomment below and update the code to test SocialProfiles
      //var instance = new Aryeo.SocialProfiles();
      //expect(instance).to.be.a(Aryeo.SocialProfiles);
    });

    it('should have the property facebookProfileUrl (base name: "facebook_profile_url")', function() {
      // uncomment below and update the code to test the property facebookProfileUrl
      //var instance = new Aryeo.SocialProfiles();
      //expect(instance).to.be();
    });

    it('should have the property instagramProfileUrl (base name: "instagram_profile_url")', function() {
      // uncomment below and update the code to test the property instagramProfileUrl
      //var instance = new Aryeo.SocialProfiles();
      //expect(instance).to.be();
    });

    it('should have the property twitterProfileUrl (base name: "twitter_profile_url")', function() {
      // uncomment below and update the code to test the property twitterProfileUrl
      //var instance = new Aryeo.SocialProfiles();
      //expect(instance).to.be();
    });

    it('should have the property linkedinProfileUrl (base name: "linkedin_profile_url")', function() {
      // uncomment below and update the code to test the property linkedinProfileUrl
      //var instance = new Aryeo.SocialProfiles();
      //expect(instance).to.be();
    });

    it('should have the property zillowProfileUrl (base name: "zillow_profile_url")', function() {
      // uncomment below and update the code to test the property zillowProfileUrl
      //var instance = new Aryeo.SocialProfiles();
      //expect(instance).to.be();
    });

  });

}));
