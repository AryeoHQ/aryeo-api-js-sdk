/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FloorPlan model module.
 * @module model/FloorPlan
 * @version 2021-06-17
 */
class FloorPlan {
    /**
     * Constructs a new <code>FloorPlan</code>.
     * A scale diagram of the arrangement of a building.
     * @alias module:model/FloorPlan
     * @param id {String} ID of the floor plan.
     * @param originalUrl {String} A URL for the original, full-resolution version of the floor plan. Useful for downloading.
     * @param largeUrl {String} A URL for a large version of the floor plan.
     * @param thumbnailUrl {String} A URL for a thumbnail-sized version of the floor plan.
     */
    constructor(id, originalUrl, largeUrl, thumbnailUrl) { 
        
        FloorPlan.initialize(this, id, originalUrl, largeUrl, thumbnailUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, originalUrl, largeUrl, thumbnailUrl) { 
        obj['id'] = id;
        obj['original_url'] = originalUrl;
        obj['large_url'] = largeUrl;
        obj['thumbnail_url'] = thumbnailUrl;
    }

    /**
     * Constructs a <code>FloorPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FloorPlan} obj Optional instance to populate.
     * @return {module:model/FloorPlan} The populated <code>FloorPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FloorPlan();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('original_url')) {
                obj['original_url'] = ApiClient.convertToType(data['original_url'], 'String');
            }
            if (data.hasOwnProperty('large_url')) {
                obj['large_url'] = ApiClient.convertToType(data['large_url'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID of the floor plan.
 * @member {String} id
 */
FloorPlan.prototype['id'] = undefined;

/**
 * A URL for the original, full-resolution version of the floor plan. Useful for downloading.
 * @member {String} original_url
 */
FloorPlan.prototype['original_url'] = undefined;

/**
 * A URL for a large version of the floor plan.
 * @member {String} large_url
 */
FloorPlan.prototype['large_url'] = undefined;

/**
 * A URL for a thumbnail-sized version of the floor plan.
 * @member {String} thumbnail_url
 */
FloorPlan.prototype['thumbnail_url'] = undefined;

/**
 * The title (or caption) of the floor plan.
 * @member {String} title
 */
FloorPlan.prototype['title'] = undefined;

/**
 * Index order position of the floor plan.
 * @member {Number} index
 */
FloorPlan.prototype['index'] = undefined;






export default FloorPlan;

