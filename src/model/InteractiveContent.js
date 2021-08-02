/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InteractiveContent model module.
 * @module model/InteractiveContent
 * @version 2021-06-17
 */
class InteractiveContent {
    /**
     * Constructs a new <code>InteractiveContent</code>.
     * A 3D virtual tour.
     * @alias module:model/InteractiveContent
     * @param id {String} ID of the content.
     * @param displayType {module:model/InteractiveContent.DisplayTypeEnum} Is the content branded, unbranded, or both?
     * @param contentType {module:model/InteractiveContent.ContentTypeEnum} The type of interactive content.
     * @param url {String} URL for the content.
     */
    constructor(id, displayType, contentType, url) { 
        
        InteractiveContent.initialize(this, id, displayType, contentType, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, displayType, contentType, url) { 
        obj['id'] = id;
        obj['display_type'] = displayType;
        obj['content_type'] = contentType;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>InteractiveContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteractiveContent} obj Optional instance to populate.
     * @return {module:model/InteractiveContent} The populated <code>InteractiveContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteractiveContent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('display_type')) {
                obj['display_type'] = ApiClient.convertToType(data['display_type'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the content.
 * @member {String} id
 */
InteractiveContent.prototype['id'] = undefined;

/**
 * Is the content branded, unbranded, or both?
 * @member {module:model/InteractiveContent.DisplayTypeEnum} display_type
 */
InteractiveContent.prototype['display_type'] = undefined;

/**
 * The type of interactive content.
 * @member {module:model/InteractiveContent.ContentTypeEnum} content_type
 */
InteractiveContent.prototype['content_type'] = undefined;

/**
 * URL for the content.
 * @member {String} url
 */
InteractiveContent.prototype['url'] = undefined;

/**
 * A URL for a thumbnail-sized preview of the content.
 * @member {String} thumbnail_url
 */
InteractiveContent.prototype['thumbnail_url'] = undefined;





/**
 * Allowed values for the <code>display_type</code> property.
 * @enum {String}
 * @readonly
 */
InteractiveContent['DisplayTypeEnum'] = {

    /**
     * value: "BRANDED"
     * @const
     */
    "BRANDED": "BRANDED",

    /**
     * value: "UNBRANDED"
     * @const
     */
    "UNBRANDED": "UNBRANDED",

    /**
     * value: "BOTH"
     * @const
     */
    "BOTH": "BOTH"
};


/**
 * Allowed values for the <code>content_type</code> property.
 * @enum {String}
 * @readonly
 */
InteractiveContent['ContentTypeEnum'] = {

    /**
     * value: "MATTERPORT"
     * @const
     */
    "MATTERPORT": "MATTERPORT",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"
};



export default InteractiveContent;

