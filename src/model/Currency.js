/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Currency model module.
 * @module model/Currency
 * @version 1.0.0
 */
class Currency {
    /**
     * Constructs a new <code>Currency</code>.
     * A system of money used for payment.
     * @alias module:model/Currency
     * @param id {String} The ID of the currency.
     * @param name {String} The name of the currency.
     * @param symbol {String} The currency symbol.
     * @param enabled {Boolean} Is this currency enabled for Aryeo?
     */
    constructor(id, name, symbol, enabled) { 
        
        Currency.initialize(this, id, name, symbol, enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, symbol, enabled) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['enabled'] = enabled;
    }

    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Currency} obj Optional instance to populate.
     * @return {module:model/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The ID of the currency.
 * @member {String} id
 */
Currency.prototype['id'] = undefined;

/**
 * The name of the currency.
 * @member {String} name
 */
Currency.prototype['name'] = undefined;

/**
 * The currency symbol.
 * @member {String} symbol
 */
Currency.prototype['symbol'] = undefined;

/**
 * Is this currency enabled for Aryeo?
 * @member {Boolean} enabled
 */
Currency.prototype['enabled'] = undefined;






export default Currency;

