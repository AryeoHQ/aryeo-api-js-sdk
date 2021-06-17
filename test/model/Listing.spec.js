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
    instance = new Aryeo.Listing();
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

  describe('Listing', function() {
    it('should create an instance of Listing', function() {
      // uncomment below and update the code to test Listing
      //var instane = new Aryeo.Listing();
      //expect(instance).to.be.a(Aryeo.Listing);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatus (base name: "delivery_status")', function() {
      // uncomment below and update the code to test the property deliveryStatus
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property thumbnailUrl (base name: "thumbnail_url")', function() {
      // uncomment below and update the code to test the property thumbnailUrl
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property agent (base name: "agent")', function() {
      // uncomment below and update the code to test the property agent
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property coAgent (base name: "co_agent")', function() {
      // uncomment below and update the code to test the property coAgent
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property videos (base name: "videos")', function() {
      // uncomment below and update the code to test the property videos
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property floorPlans (base name: "floor_plans")', function() {
      // uncomment below and update the code to test the property floorPlans
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property propertyWebsites (base name: "property_websites")', function() {
      // uncomment below and update the code to test the property propertyWebsites
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property interactiveContent (base name: "interactive_content")', function() {
      // uncomment below and update the code to test the property interactiveContent
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property propertyDetails (base name: "property_details")', function() {
      // uncomment below and update the code to test the property propertyDetails
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property downloadsEnabled (base name: "downloads_enabled")', function() {
      // uncomment below and update the code to test the property downloadsEnabled
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

  });

}));
