/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AppointmentCancelPutPayload model module.
 * @module model/AppointmentCancelPutPayload
 * @version 2021-06-17
 */
class AppointmentCancelPutPayload {
    /**
     * Constructs a new <code>AppointmentCancelPutPayload</code>.
     * Payload for canceling an appointment record.
     * @alias module:model/AppointmentCancelPutPayload
     */
    constructor() { 
        
        AppointmentCancelPutPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppointmentCancelPutPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppointmentCancelPutPayload} obj Optional instance to populate.
     * @return {module:model/AppointmentCancelPutPayload} The populated <code>AppointmentCancelPutPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppointmentCancelPutPayload();

            if (data.hasOwnProperty('notify_customer')) {
                obj['notify_customer'] = ApiClient.convertToType(data['notify_customer'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Sends a notification to the appointment's order's customer that the appointment was canceled.
 * @member {Boolean} notify_customer
 */
AppointmentCancelPutPayload.prototype['notify_customer'] = undefined;






export default AppointmentCancelPutPayload;

