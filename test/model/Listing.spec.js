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

    it('should have the property mlsNumber (base name: "mls_number")', function() {
      // uncomment below and update the code to test the property mlsNumber
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property subType (base name: "sub_type")', function() {
      // uncomment below and update the code to test the property subType
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property standardStatus (base name: "standard_status")', function() {
      // uncomment below and update the code to test the property standardStatus
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property lot (base name: "lot")', function() {
      // uncomment below and update the code to test the property lot
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property building (base name: "building")', function() {
      // uncomment below and update the code to test the property building
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property listAgent (base name: "list_agent")', function() {
      // uncomment below and update the code to test the property listAgent
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property coListAgent (base name: "co_list_agent")', function() {
      // uncomment below and update the code to test the property coListAgent
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

    it('should have the property interactiveContent (base name: "interactive_content")', function() {
      // uncomment below and update the code to test the property interactiveContent
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property propertyWebsite (base name: "property_website")', function() {
      // uncomment below and update the code to test the property propertyWebsite
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property orders (base name: "orders")', function() {
      // uncomment below and update the code to test the property orders
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

    it('should have the property downloadsEnabled (base name: "downloads_enabled")', function() {
      // uncomment below and update the code to test the property downloadsEnabled
      //var instance = new Aryeo.Listing();
      //expect(instance).to.be();
    });

  });

}));
