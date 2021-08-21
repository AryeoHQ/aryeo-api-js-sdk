/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AppointmentReschedulePutPayload model module.
 * @module model/AppointmentReschedulePutPayload
 * @version 2021-06-17
 */
class AppointmentReschedulePutPayload {
    /**
     * Constructs a new <code>AppointmentReschedulePutPayload</code>.
     * Payload for rescheduling an appointment record.
     * @alias module:model/AppointmentReschedulePutPayload
     * @param startAt {Date} The new date and time (ISO 8601 format) when the appointment is set to start.
     * @param endAt {Date} The new date and time (ISO 8601 format) when the appointment is set to end.
     */
    constructor(startAt, endAt) { 
        
        AppointmentReschedulePutPayload.initialize(this, startAt, endAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, startAt, endAt) { 
        obj['start_at'] = startAt;
        obj['end_at'] = endAt;
    }

    /**
     * Constructs a <code>AppointmentReschedulePutPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppointmentReschedulePutPayload} obj Optional instance to populate.
     * @return {module:model/AppointmentReschedulePutPayload} The populated <code>AppointmentReschedulePutPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppointmentReschedulePutPayload();

            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
            }
            if (data.hasOwnProperty('notify_customer')) {
                obj['notify_customer'] = ApiClient.convertToType(data['notify_customer'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The new date and time (ISO 8601 format) when the appointment is set to start.
 * @member {Date} start_at
 */
AppointmentReschedulePutPayload.prototype['start_at'] = undefined;

/**
 * The new date and time (ISO 8601 format) when the appointment is set to end.
 * @member {Date} end_at
 */
AppointmentReschedulePutPayload.prototype['end_at'] = undefined;

/**
 * Send a notification to the appointment's order's customer that the appointment was rescheduled.
 * @member {Boolean} notify_customer
 */
AppointmentReschedulePutPayload.prototype['notify_customer'] = undefined;






export default AppointmentReschedulePutPayload;

