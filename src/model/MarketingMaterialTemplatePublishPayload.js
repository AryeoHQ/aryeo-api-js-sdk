/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MarketingMaterialTemplatePublishPayload model module.
 * @module model/MarketingMaterialTemplatePublishPayload
 * @version 1.0.0
 */
class MarketingMaterialTemplatePublishPayload {
    /**
     * Constructs a new <code>MarketingMaterialTemplatePublishPayload</code>.
     * Payload for publishing a marketing material template record.
     * @alias module:model/MarketingMaterialTemplatePublishPayload
     */
    constructor() { 
        
        MarketingMaterialTemplatePublishPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MarketingMaterialTemplatePublishPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketingMaterialTemplatePublishPayload} obj Optional instance to populate.
     * @return {module:model/MarketingMaterialTemplatePublishPayload} The populated <code>MarketingMaterialTemplatePublishPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketingMaterialTemplatePublishPayload();

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
MarketingMaterialTemplatePublishPayload.prototype['polotno_json'] = undefined;






export default MarketingMaterialTemplatePublishPayload;

