/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MarketingMaterialPublishPayload model module.
 * @module model/MarketingMaterialPublishPayload
 * @version 1.0.0
 */
class MarketingMaterialPublishPayload {
    /**
     * Constructs a new <code>MarketingMaterialPublishPayload</code>.
     * Payload for publishing a marketing material record.
     * @alias module:model/MarketingMaterialPublishPayload
     */
    constructor() { 
        
        MarketingMaterialPublishPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MarketingMaterialPublishPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketingMaterialPublishPayload} obj Optional instance to populate.
     * @return {module:model/MarketingMaterialPublishPayload} The populated <code>MarketingMaterialPublishPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketingMaterialPublishPayload();

            if (data.hasOwnProperty('polotno_json')) {
                obj['polotno_json'] = ApiClient.convertToType(data['polotno_json'], 'String');
            }
        }
        return obj;
    }


}

/**
 * String representation of a polotno JSON object.
 * @member {String} polotno_json
 */
MarketingMaterialPublishPayload.prototype['polotno_json'] = undefined;






export default MarketingMaterialPublishPayload;

