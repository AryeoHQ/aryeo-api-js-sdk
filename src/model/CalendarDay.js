/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CalendarDay model module.
 * @module model/CalendarDay
 * @version 2021-06-17
 */
class CalendarDay {
    /**
     * Constructs a new <code>CalendarDay</code>.
     * A bookable time range with available users.
     * @alias module:model/CalendarDay
     * @param date {String} Calendar day that has available timeslots.
     * @param isAvailable {Boolean} Does the day have availability?
     */
    constructor(date, isAvailable) { 
        
        CalendarDay.initialize(this, date, isAvailable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, date, isAvailable) { 
        obj['date'] = date;
        obj['is_available'] = isAvailable;
    }

    /**
     * Constructs a <code>CalendarDay</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CalendarDay} obj Optional instance to populate.
     * @return {module:model/CalendarDay} The populated <code>CalendarDay</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CalendarDay();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('is_available')) {
                obj['is_available'] = ApiClient.convertToType(data['is_available'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Calendar day that has available timeslots.
 * @member {String} date
 */
CalendarDay.prototype['date'] = undefined;

/**
 * Does the day have availability?
 * @member {Boolean} is_available
 */
CalendarDay.prototype['is_available'] = undefined;






export default CalendarDay;

