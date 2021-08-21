/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Appointment from './Appointment';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';

/**
 * The AppointmentCollection model module.
 * @module model/AppointmentCollection
 * @version 2021-06-17
 */
class AppointmentCollection {
    /**
     * Constructs a new <code>AppointmentCollection</code>.
     * A collection of appointments.
     * @alias module:model/AppointmentCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        AppointmentCollection.initialize(this, status);
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
     * Constructs a <code>AppointmentCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppointmentCollection} obj Optional instance to populate.
     * @return {module:model/AppointmentCollection} The populated <code>AppointmentCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppointmentCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Appointment]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = PaginationLinks.constructFromObject(data['links']);
            }
        }
        return obj;
    }


}

/**
 * What was the state of the request?
 * @member {String} status
 */
AppointmentCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/Appointment>} data
 */
AppointmentCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
AppointmentCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
AppointmentCollection.prototype['links'] = undefined;






export default AppointmentCollection;

