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
    instance = new Aryeo.AppointmentsApi();
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

  describe('AppointmentsApi', function() {
    describe('getAppointments', function() {
      it('should call getAppointments successfully', function(done) {
        //uncomment below and update the code to test getAppointments
        //instance.getAppointments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAvailableDates', function() {
      it('should call getAvailableDates successfully', function(done) {
        //uncomment below and update the code to test getAvailableDates
        //instance.getAvailableDates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAvailableTimeslots', function() {
      it('should call getAvailableTimeslots successfully', function(done) {
        //uncomment below and update the code to test getAvailableTimeslots
        //instance.getAvailableTimeslots(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnconfirmedAppointments', function() {
      it('should call getUnconfirmedAppointments successfully', function(done) {
        //uncomment below and update the code to test getUnconfirmedAppointments
        //instance.getUnconfirmedAppointments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUnconfirmedAppointmentsId', function() {
      it('should call getUnconfirmedAppointmentsId successfully', function(done) {
        //uncomment below and update the code to test getUnconfirmedAppointmentsId
        //instance.getUnconfirmedAppointmentsId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putAppointmentsAppointmentIdCancel', function() {
      it('should call putAppointmentsAppointmentIdCancel successfully', function(done) {
        //uncomment below and update the code to test putAppointmentsAppointmentIdCancel
        //instance.putAppointmentsAppointmentIdCancel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putAppointmentsAppointmentIdReschedule', function() {
      it('should call putAppointmentsAppointmentIdReschedule successfully', function(done) {
        //uncomment below and update the code to test putAppointmentsAppointmentIdReschedule
        //instance.putAppointmentsAppointmentIdReschedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
