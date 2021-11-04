/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import CalendarDay from './CalendarDay';
import PaginationLinks from './PaginationLinks';
import PaginationMeta from './PaginationMeta';

/**
 * The CalendarDayCollection model module.
 * @module model/CalendarDayCollection
 * @version 2021-06-17
 */
class CalendarDayCollection {
    /**
     * Constructs a new <code>CalendarDayCollection</code>.
     * A collection of calendar days that have available timeslots
     * @alias module:model/CalendarDayCollection
     * @param status {String} What was the state of the request?
     */
    constructor(status) { 
        
        CalendarDayCollection.initialize(this, status);
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
     * Constructs a <code>CalendarDayCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CalendarDayCollection} obj Optional instance to populate.
     * @return {module:model/CalendarDayCollection} The populated <code>CalendarDayCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalendarDayCollection();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CalendarDay]);
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
CalendarDayCollection.prototype['status'] = undefined;

/**
 * 
 * @member {Array.<module:model/CalendarDay>} data
 */
CalendarDayCollection.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationMeta} meta
 */
CalendarDayCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/PaginationLinks} links
 */
CalendarDayCollection.prototype['links'] = undefined;






export default CalendarDayCollection;

