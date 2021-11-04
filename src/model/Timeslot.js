/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import User from './User';

/**
 * The Timeslot model module.
 * @module model/Timeslot
 * @version 2021-06-17
 */
class Timeslot {
    /**
     * Constructs a new <code>Timeslot</code>.
     * A bookable time range, including users that are available.
     * @alias module:model/Timeslot
     * @param startAt {String} Start time of the available slot
     * @param endAt {String} End time of the available slot
     */
    constructor(startAt, endAt) { 
        
        Timeslot.initialize(this, startAt, endAt);
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
     * Constructs a <code>Timeslot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Timeslot} obj Optional instance to populate.
     * @return {module:model/Timeslot} The populated <code>Timeslot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Timeslot();

            if (data.hasOwnProperty('start_at')) {
                obj['start_at'] = ApiClient.convertToType(data['start_at'], 'String');
            }
            if (data.hasOwnProperty('end_at')) {
                obj['end_at'] = ApiClient.convertToType(data['end_at'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
        }
        return obj;
    }


}

/**
 * Start time of the available slot
 * @member {String} start_at
 */
Timeslot.prototype['start_at'] = undefined;

/**
 * End time of the available slot
 * @member {String} end_at
 */
Timeslot.prototype['end_at'] = undefined;

/**
 * @member {Array.<module:model/User>} users
 */
Timeslot.prototype['users'] = undefined;






export default Timeslot;

