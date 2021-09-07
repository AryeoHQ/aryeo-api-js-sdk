/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Order from './Order';
import OrderItem from './OrderItem';
import User from './User';

/**
 * The Appointment model module.
 * @module model/Appointment
 * @version 2021-06-17
 */
class Appointment {
    /**
     * Constructs a new <code>Appointment</code>.
     * An appointment.
     * @alias module:model/Appointment
     * @param id {String} The ID of the appointment.
     */
    constructor(id) { 
        
        Appointment.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>Appointment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Appointment} obj Optional instance to populate.
     * @return {module:model/Appointment} The populated <code>Appointment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Appointment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'Date');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'Date');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = Order.constructFromObject(data['order']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrderItem]);
            }
        }
        return obj;
    }


}

/**
 * The ID of the appointment.
 * @member {String} id
 */
Appointment.prototype['id'] = undefined;

/**
 * The status of the appointment.
 * @member {module:model/Appointment.StatusEnum} status
 */
Appointment.prototype['status'] = undefined;

/**
 * The title of the appointment.
 * @member {String} title
 */
Appointment.prototype['title'] = undefined;

/**
 * The multi-line description of the appointment.
 * @member {String} description
 */
Appointment.prototype['description'] = undefined;

/**
 * The date and time (ISO 8601 format) when the appointment is set to start.
 * @member {Date} start_at
 */
Appointment.prototype['start_at'] = undefined;

/**
 * The date and time (ISO 8601 format) when the appointment is set to end.
 * @member {Date} end_at
 */
Appointment.prototype['end_at'] = undefined;

/**
 * The length of the appointment in minutes.
 * @member {Number} duration
 */
Appointment.prototype['duration'] = undefined;

/**
 * @member {module:model/Order} order
 */
Appointment.prototype['order'] = undefined;

/**
 * Users attached to the appointment.
 * @member {Array.<module:model/User>} users
 */
Appointment.prototype['users'] = undefined;

/**
 * Items attached to the appointment.
 * @member {Array.<module:model/OrderItem>} items
 */
Appointment.prototype['items'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Appointment['StatusEnum'] = {

    /**
     * value: "SCHEDULED"
     * @const
     */
    "SCHEDULED": "SCHEDULED",

    /**
     * value: "UNSCHEDULED"
     * @const
     */
    "UNSCHEDULED": "UNSCHEDULED",

    /**
     * value: "RESCHEDULED"
     * @const
     */
    "RESCHEDULED": "RESCHEDULED",

    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED"
};



export default Appointment;

