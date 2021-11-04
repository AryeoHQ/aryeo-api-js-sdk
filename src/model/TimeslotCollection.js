/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';
import Timeslot from './Timeslot';

/**
 * The TimeslotCollection model module.
 * @module model/TimeslotCollection
 * @version 2021-06-17
 */
class TimeslotCollection {
    /**
     * Constructs a new <code>TimeslotCollection</code>.
     * A collection of bookable timeslots.
     * @alias module:model/TimeslotCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        TimeslotCollection.initialize(this, status);
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
     * Constructs a <code>TimeslotCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeslotCollection} obj Optional instance to populate.
     * @return {module:model/TimeslotCollection} The populated <code>TimeslotCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeslotCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Timeslot]);
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
TimeslotCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/Timeslot>} data
 */
TimeslotCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
TimeslotCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
TimeslotCollection.prototype['links'] = undefined;






export default TimeslotCollection;

