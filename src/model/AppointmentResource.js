/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Appointment from './Appointment';

/**
 * The AppointmentResource model module.
 * @module model/AppointmentResource
 * @version 2021-06-17
 */
class AppointmentResource {
    /**
     * Constructs a new <code>AppointmentResource</code>.
     * An appointment.
     * @alias module:model/AppointmentResource
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        AppointmentResource.initialize(this, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status) { 
        obj['status'] = status;
    }

    /**
     * Constructs a <code>AppointmentResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppointmentResource} obj Optional instance to populate.
     * @return {module:model/AppointmentResource} The populated <code>AppointmentResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppointmentResource();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Appointment.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
AppointmentResource.prototype['status'] = undefined;

/**
 * @member {module:model/Appointment} data
 */
AppointmentResource.prototype['data'] = undefined;






export default AppointmentResource;

