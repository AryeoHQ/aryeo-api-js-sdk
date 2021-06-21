/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Image model module.
 * @module model/Image
 * @version 1.0.0
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * A visual representation of something.
     * @alias module:model/Image
     * @param id {Number} ID of the image.
     * @param thumbnailUrl {String} A URL for a thumbnail-sized version of the image.
     * @param largeUrl {String} A URL for a large version of the image.
     * @param originalUrl {String} A URL for the original, full-resolution version of the image. Useful for downloading.
     * @param displayInGallery {Boolean} Should the image be displayed in a gallery?
     */
    constructor(id, thumbnailUrl, largeUrl, originalUrl, displayInGallery) { 
        
        Image.initialize(this, id, thumbnailUrl, largeUrl, originalUrl, displayInGallery);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, thumbnailUrl, largeUrl, originalUrl, displayInGallery) { 
        obj['id'] = id;
        obj['thumbnail_url'] = thumbnailUrl;
        obj['large_url'] = largeUrl;
        obj['original_url'] = originalUrl;
        obj['display_in_gallery'] = displayInGallery;
    }

    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
            if (data.hasOwnProperty('large_url')) {
                obj['large_url'] = ApiClient.convertToType(data['large_url'], 'String');
            }
            if (data.hasOwnProperty('original_url')) {
                obj['original_url'] = ApiClient.convertToType(data['original_url'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('caption')) {
                obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
            }
            if (data.hasOwnProperty('display_in_gallery')) {
                obj['display_in_gallery'] = ApiClient.convertToType(data['display_in_gallery'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * ID of the image.
 * @member {Number} id
 */
Image.prototype['id'] = undefined;

/**
 * The UUID of the image.
 * @member {String} uuid
 */
Image.prototype['uuid'] = undefined;

/**
 * A URL for a thumbnail-sized version of the image.
 * @member {String} thumbnail_url
 */
Image.prototype['thumbnail_url'] = undefined;

/**
 * A URL for a large version of the image.
 * @member {String} large_url
 */
Image.prototype['large_url'] = undefined;

/**
 * A URL for the original, full-resolution version of the image. Useful for downloading.
 * @member {String} original_url
 */
Image.prototype['original_url'] = undefined;

/**
 * The order in which the image should be displayed amongst other related images.
 * @member {Number} index
 */
Image.prototype['index'] = undefined;

/**
 * A brief explanation of the image.
 * @member {String} caption
 */
Image.prototype['caption'] = undefined;

/**
 * Should the image be displayed in a gallery?
 * @member {Boolean} display_in_gallery
 */
Image.prototype['display_in_gallery'] = undefined;






export default Image;

