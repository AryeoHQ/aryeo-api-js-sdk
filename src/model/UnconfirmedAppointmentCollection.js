/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import UnconfirmedAppointment from './UnconfirmedAppointment';

/**
 * The UnconfirmedAppointmentCollection model module.
 * @module model/UnconfirmedAppointmentCollection
 * @version 2021-06-17
 */
class UnconfirmedAppointmentCollection {
    /**
     * Constructs a new <code>UnconfirmedAppointmentCollection</code>.
     * A collection of appointments.
     * @alias module:model/UnconfirmedAppointmentCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        UnconfirmedAppointmentCollection.initialize(this, status);
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
     * Constructs a <code>UnconfirmedAppointmentCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnconfirmedAppointmentCollection} obj Optional instance to populate.
     * @return {module:model/UnconfirmedAppointmentCollection} The populated <code>UnconfirmedAppointmentCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UnconfirmedAppointmentCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [UnconfirmedAppointment]);
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
UnconfirmedAppointmentCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/UnconfirmedAppointment>} data
 */
UnconfirmedAppointmentCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
UnconfirmedAppointmentCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
UnconfirmedAppointmentCollection.prototype['links'] = undefined;






export default UnconfirmedAppointmentCollection;

