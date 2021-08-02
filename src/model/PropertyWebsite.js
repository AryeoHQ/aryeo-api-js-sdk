/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PropertyWebsite model module.
 * @module model/PropertyWebsite
 * @version 2021-06-17
 */
class PropertyWebsite {
    /**
     * Constructs a new <code>PropertyWebsite</code>.
     * Website (in branded and unbranded versions) that displays information about a property.
     * @alias module:model/PropertyWebsite
     * @param id {String} ID of the website.
     * @param brandedUrl {String} URL for branded version of website.
     * @param unbrandedUrl {String} URL for unbranded version of website.
     */
    constructor(id, brandedUrl, unbrandedUrl) { 
        
        PropertyWebsite.initialize(this, id, brandedUrl, unbrandedUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, brandedUrl, unbrandedUrl) { 
        obj['id'] = id;
        obj['branded_url'] = brandedUrl;
        obj['unbranded_url'] = unbrandedUrl;
    }

    /**
     * Constructs a <code>PropertyWebsite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertyWebsite} obj Optional instance to populate.
     * @return {module:model/PropertyWebsite} The populated <code>PropertyWebsite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertyWebsite();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('branded_url')) {
                obj['branded_url'] = ApiClient.convertToType(data['branded_url'], 'String');
            }
            if (data.hasOwnProperty('unbranded_url')) {
                obj['unbranded_url'] = ApiClient.convertToType(data['unbranded_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the website.
 * @member {String} id
 */
PropertyWebsite.prototype['id'] = undefined;

/**
 * URL for branded version of website.
 * @member {String} branded_url
 */
PropertyWebsite.prototype['branded_url'] = undefined;

/**
 * URL for unbranded version of website.
 * @member {String} unbranded_url
 */
PropertyWebsite.prototype['unbranded_url'] = undefined;






export default PropertyWebsite;

