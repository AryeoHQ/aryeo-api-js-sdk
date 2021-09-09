/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from "../ApiClient";
import ApiError403 from '../model/ApiError403';
import ApiError404 from '../model/ApiError404';
import ApiError409 from '../model/ApiError409';
import ApiError500 from '../model/ApiError500';
import ApiFail422 from '../model/ApiFail422';
import AppointmentCancelPutPayload from '../model/AppointmentCancelPutPayload';
import AppointmentCollection from '../model/AppointmentCollection';
import AppointmentReschedulePutPayload from '../model/AppointmentReschedulePutPayload';
import AppointmentResource from '../model/AppointmentResource';
import UnconfirmedAppointmentCollection from '../model/UnconfirmedAppointmentCollection';
import UnconfirmedAppointmentResource from '../model/UnconfirmedAppointmentResource';

/**
* Appointments service.
* @module api/AppointmentsApi
* @version 2021-06-17
*/
export default class AppointmentsApi {

    /**
    * Constructs a new AppointmentsApi. 
    * @alias module:api/AppointmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAppointments operation.
     * @callback module:api/AppointmentsApi~getAppointmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppointmentCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all appointments.
     * List all appointments. By default, returns a list of appointments that have been scheduled and have not been canceled
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {module:model/String} opts.filterTense Return appointments that are upcoming or in the past.
     * @param {Date} opts.filterStartAtGte Return appointments where the start_at field is greater than or equal to this value. Effectively, appointments that start after this date.
     * @param {Date} opts.filterStartAtLte Return appointments where the start_at field is less than or equal to this value. Effectively, appointments that start before this date.
     * @param {Array} opts.filterUserIds The IDs of users whose appointments will be retrieved. UUID Version 4.
     * @param {String} opts.sort Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-start_at`.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {module:api/AppointmentsApi~getAppointmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppointmentCollection}
     */
    getAppointments(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'include': opts['include'],
        'filter[tense]': opts['filterTense'],
        'filter[start_at_gte]': opts['filterStartAtGte'],
        'filter[start_at_lte]': opts['filterStartAtLte'],
        'filter[user_ids]': opts['filterUserIds'],
        'sort': opts['sort'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AppointmentCollection;
      return this.apiClient.callApi(
        '/appointments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUnconfirmedAppointments operation.
     * @callback module:api/AppointmentsApi~getUnconfirmedAppointmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnconfirmedAppointmentCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all unconfirmed appointments.
     * List all unconfirmed appointments. These are appointments that have not been scheduled. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {Array} opts.filterUserIds The IDs of users whose appointments will be retrieved. UUID Version 4.
     * @param {String} opts.sort Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-start_at`.
     * @param {String} opts.perPage The number of items per page. Defaults to 25.
     * @param {String} opts.page The requested page. Defaults to 1.
     * @param {module:api/AppointmentsApi~getUnconfirmedAppointmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnconfirmedAppointmentCollection}
     */
    getUnconfirmedAppointments(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'include': opts['include'],
        'filter[user_ids]': opts['filterUserIds'],
        'sort': opts['sort'],
        'per_page': opts['perPage'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UnconfirmedAppointmentCollection;
      return this.apiClient.callApi(
        '/unconfirmed-appointments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUnconfirmedAppointmentsId operation.
     * @callback module:api/AppointmentsApi~getUnconfirmedAppointmentsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnconfirmedAppointmentResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an unconfirmed appointment.
     * Retrieves the details of an unconfirmed appointment with the given ID.
     * @param {String} unconfirmedAppointmentId The ID of an appointment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.include Comma separated list of optional data to include in the response.
     * @param {module:api/AppointmentsApi~getUnconfirmedAppointmentsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnconfirmedAppointmentResource}
     */
    getUnconfirmedAppointmentsId(unconfirmedAppointmentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'unconfirmedAppointmentId' is set
      if (unconfirmedAppointmentId === undefined || unconfirmedAppointmentId === null) {
        throw new Error("Missing the required parameter 'unconfirmedAppointmentId' when calling getUnconfirmedAppointmentsId");
      }

      let pathParams = {
        'unconfirmed_appointment_id': unconfirmedAppointmentId
      };
      let queryParams = {
        'include': opts['include']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UnconfirmedAppointmentResource;
      return this.apiClient.callApi(
        '/unconfirmed-appointments/{unconfirmed_appointment_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putAppointmentsAppointmentIdCancel operation.
     * @callback module:api/AppointmentsApi~putAppointmentsAppointmentIdCancelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppointmentResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel an appointment.
     * Cancel an appointment. The appointments order's customer can be optionally notified of this change. 
     * @param {String} appointmentId The ID of an appointment.
     * @param {Object} opts Optional parameters
     * @param {module:model/AppointmentCancelPutPayload} opts.appointmentCancelPutPayload 
     * @param {module:api/AppointmentsApi~putAppointmentsAppointmentIdCancelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppointmentResource}
     */
    putAppointmentsAppointmentIdCancel(appointmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['appointmentCancelPutPayload'];
      // verify the required parameter 'appointmentId' is set
      if (appointmentId === undefined || appointmentId === null) {
        throw new Error("Missing the required parameter 'appointmentId' when calling putAppointmentsAppointmentIdCancel");
      }

      let pathParams = {
        'appointment_id': appointmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AppointmentResource;
      return this.apiClient.callApi(
        '/appointments/{appointment_id}/cancel', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putAppointmentsAppointmentIdReschedule operation.
     * @callback module:api/AppointmentsApi~putAppointmentsAppointmentIdRescheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppointmentResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reschedule an appointment.
     * Reschedule an appointment. The appointments order's customer can be optionally notified of this change. 
     * @param {String} appointmentId The ID of an appointment.
     * @param {Object} opts Optional parameters
     * @param {module:model/AppointmentReschedulePutPayload} opts.appointmentReschedulePutPayload 
     * @param {module:api/AppointmentsApi~putAppointmentsAppointmentIdRescheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AppointmentResource}
     */
    putAppointmentsAppointmentIdReschedule(appointmentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['appointmentReschedulePutPayload'];
      // verify the required parameter 'appointmentId' is set
      if (appointmentId === undefined || appointmentId === null) {
        throw new Error("Missing the required parameter 'appointmentId' when calling putAppointmentsAppointmentIdReschedule");
      }

      let pathParams = {
        'appointment_id': appointmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Token'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AppointmentResource;
      return this.apiClient.callApi(
        '/appointments/{appointment_id}/reschedule', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
