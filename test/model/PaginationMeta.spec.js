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
    instance = new Aryeo.PaginationMeta();
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

  describe('PaginationMeta', function() {
    it('should create an instance of PaginationMeta', function() {
      // uncomment below and update the code to test PaginationMeta
      //var instane = new Aryeo.PaginationMeta();
      //expect(instance).to.be.a(Aryeo.PaginationMeta);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

    it('should have the property perPage (base name: "per_page")', function() {
      // uncomment below and update the code to test the property perPage
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

    it('should have the property currentPage (base name: "current_page")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

    it('should have the property lastPage (base name: "last_page")', function() {
      // uncomment below and update the code to test the property lastPage
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new Aryeo.PaginationMeta();
      //expect(instance).to.be();
    });

  });

}));
