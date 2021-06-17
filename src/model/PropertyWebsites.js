/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PropertyWebsites model module.
 * @module model/PropertyWebsites
 * @version 1.0.0
 */
class PropertyWebsites {
    /**
     * Constructs a new <code>PropertyWebsites</code>.
     * Websites that displays information about a property.
     * @alias module:model/PropertyWebsites
     * @param brandedUrl {String} URL for website.
     * @param unbrandedUrl {String} URL for website.
     * @param id {Number} ID for property website
     */
    constructor(brandedUrl, unbrandedUrl, id) { 
        
        PropertyWebsites.initialize(this, brandedUrl, unbrandedUrl, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, brandedUrl, unbrandedUrl, id) { 
        obj['branded_url'] = brandedUrl;
        obj['unbranded_url'] = unbrandedUrl;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>PropertyWebsites</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyWebsites} obj Optional instance to populate.
     * @return {module:model/PropertyWebsites} The populated <code>PropertyWebsites</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyWebsites();

            if (data.hasOwnProperty('branded_url')) {
                obj['branded_url'] = ApiClient.convertToType(data['branded_url'], 'String');
            }
            if (data.hasOwnProperty('unbranded_url')) {
                obj['unbranded_url'] = ApiClient.convertToType(data['unbranded_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * URL for website.
 * @member {String} branded_url
 */
PropertyWebsites.prototype['branded_url'] = undefined;

/**
 * URL for website.
 * @member {String} unbranded_url
 */
PropertyWebsites.prototype['unbranded_url'] = undefined;

/**
 * ID for property website
 * @member {Number} id
 */
PropertyWebsites.prototype['id'] = undefined;






export default PropertyWebsites;

