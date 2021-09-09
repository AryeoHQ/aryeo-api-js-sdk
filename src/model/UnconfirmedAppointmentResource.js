/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import UnconfirmedAppointment from './UnconfirmedAppointment';

/**
 * The UnconfirmedAppointmentResource model module.
 * @module model/UnconfirmedAppointmentResource
 * @version 2021-06-17
 */
class UnconfirmedAppointmentResource {
    /**
     * Constructs a new <code>UnconfirmedAppointmentResource</code>.
     * An appointment.
     * @alias module:model/UnconfirmedAppointmentResource
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        UnconfirmedAppointmentResource.initialize(this, status);
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
     * Constructs a <code>UnconfirmedAppointmentResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnconfirmedAppointmentResource} obj Optional instance to populate.
     * @return {module:model/UnconfirmedAppointmentResource} The populated <code>UnconfirmedAppointmentResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnconfirmedAppointmentResource();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = UnconfirmedAppointment.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
UnconfirmedAppointmentResource.prototype['status'] = undefined;

/**
 * @member {module:model/UnconfirmedAppointment} data
 */
UnconfirmedAppointmentResource.prototype['data'] = undefined;






export default UnconfirmedAppointmentResource;

