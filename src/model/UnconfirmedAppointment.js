/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Order from './Order';
import User from './User';

/**
 * The UnconfirmedAppointment model module.
 * @module model/UnconfirmedAppointment
 * @version 2021-06-17
 */
class UnconfirmedAppointment {
    /**
     * Constructs a new <code>UnconfirmedAppointment</code>.
     * An unconfirmed appointment.
     * @alias module:model/UnconfirmedAppointment
     * @param id {String} The ID of the appointment.
     */
    constructor(id) { 
        
        UnconfirmedAppointment.initialize(this, id);
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
     * Constructs a <code>UnconfirmedAppointment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnconfirmedAppointment} obj Optional instance to populate.
     * @return {module:model/UnconfirmedAppointment} The populated <code>UnconfirmedAppointment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnconfirmedAppointment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = Order.constructFromObject(data['order']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
            if (data.hasOwnProperty('preference_type')) {
                obj['preference_type'] = ApiClient.convertToType(data['preference_type'], 'String');
            }
            if (data.hasOwnProperty('preferred_start_at')) {
                obj['preferred_start_at'] = ApiClient.convertToType(data['preferred_start_at'], 'Date');
            }
            if (data.hasOwnProperty('preferred_start_at_day')) {
                obj['preferred_start_at_day'] = ApiClient.convertToType(data['preferred_start_at_day'], 'Date');
            }
            if (data.hasOwnProperty('preferred_start_at_time_of_day')) {
                obj['preferred_start_at_time_of_day'] = ApiClient.convertToType(data['preferred_start_at_time_of_day'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the appointment.
 * @member {String} id
 */
UnconfirmedAppointment.prototype['id'] = undefined;

/**
 * The title of the appointment.
 * @member {String} title
 */
UnconfirmedAppointment.prototype['title'] = undefined;

/**
 * The multi-line description of the appointment.
 * @member {String} description
 */
UnconfirmedAppointment.prototype['description'] = undefined;

/**
 * @member {module:model/Order} order
 */
UnconfirmedAppointment.prototype['order'] = undefined;

/**
 * Users attached to the appointment.
 * @member {Array.<module:model/User>} users
 */
UnconfirmedAppointment.prototype['users'] = undefined;

/**
 * The type of preferred scheduling information provided by a customer to aid in scheduling this appointment.
 * @member {module:model/UnconfirmedAppointment.PreferenceTypeEnum} preference_type
 */
UnconfirmedAppointment.prototype['preference_type'] = undefined;

/**
 * A preferred date and time (ISO 8601 format) for when the appointment could start. Only returned if unconfirmed appointment's preference type is TIME. 
 * @member {Date} preferred_start_at
 */
UnconfirmedAppointment.prototype['preferred_start_at'] = undefined;

/**
 * A preferred date (ISO 8601 format) for when the appointment could start. Only returned if unconfirmed appointment's preference type is TIME_OF_DAY. 
 * @member {Date} preferred_start_at_day
 */
UnconfirmedAppointment.prototype['preferred_start_at_day'] = undefined;

/**
 * A preferred time of day for when the appointment could start. Only returned if unconfirmed appointment's preference type is TIME_OF_DAY. 
 * @member {module:model/UnconfirmedAppointment.PreferredStartAtTimeOfDayEnum} preferred_start_at_time_of_day
 */
UnconfirmedAppointment.prototype['preferred_start_at_time_of_day'] = undefined;

/**
 * The estimated length of the appointment in minutes, if available.
 * @member {Number} duration
 */
UnconfirmedAppointment.prototype['duration'] = undefined;





/**
 * Allowed values for the <code>preference_type</code> property.
 * @enum {String}
 * @readonly
 */
UnconfirmedAppointment['PreferenceTypeEnum'] = {

    /**
     * value: "ASAP"
     * @const
     */
    "ASAP": "ASAP",

    /**
     * value: "TIME"
     * @const
     */
    "TIME": "TIME",

    /**
     * value: "TIME_OF_DAY"
     * @const
     */
    "TIME_OF_DAY": "TIME_OF_DAY"
};


/**
 * Allowed values for the <code>preferred_start_at_time_of_day</code> property.
 * @enum {String}
 * @readonly
 */
UnconfirmedAppointment['PreferredStartAtTimeOfDayEnum'] = {

    /**
     * value: "MORNING"
     * @const
     */
    "MORNING": "MORNING",

    /**
     * value: "AFTERNOON"
     * @const
     */
    "AFTERNOON": "AFTERNOON",

    /**
     * value: "TWILIGHT"
     * @const
     */
    "TWILIGHT": "TWILIGHT"
};



export default UnconfirmedAppointment;

