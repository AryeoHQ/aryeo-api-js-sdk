/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Video model module.
 * @module model/Video
 * @version 2021-06-17
 */
class Video {
    /**
     * Constructs a new <code>Video</code>.
     * A recording of moving visual images. Provided either as a download URL (MP4) or a link (e.g. YouTube, Vimeo).
     * @alias module:model/Video
     * @param id {String} ID of the video. UUID Version 4.
     * @param displayType {module:model/Video.DisplayTypeEnum} The display type determines if the video is branded or unbranded (can also be none or both). This affects whether the video is displayed on branded or unbranded marketing materials such as the property website.
     * @param sourceType {module:model/Video.SourceTypeEnum} The original upload source of the video, used to determine how to handle the playback_url of the video and other display properties. 
     * @param thumbnailUrl {String} A thumbnail image URL for the video.
     * @param playbackUrl {String} A URL linking to playback stream of the video.
     */
    constructor(id, displayType, sourceType, thumbnailUrl, playbackUrl) { 
        
        Video.initialize(this, id, displayType, sourceType, thumbnailUrl, playbackUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, displayType, sourceType, thumbnailUrl, playbackUrl) { 
        obj['id'] = id;
        obj['display_type'] = displayType;
        obj['source_type'] = sourceType;
        obj['thumbnail_url'] = thumbnailUrl;
        obj['playback_url'] = playbackUrl;
    }

    /**
     * Constructs a <code>Video</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Video} obj Optional instance to populate.
     * @return {module:model/Video} The populated <code>Video</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Video();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
            }
            if (data.hasOwnProperty('display_type')) {
                obj['display_type'] = ApiClient.convertToType(data['display_type'], 'String');
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
            if (data.hasOwnProperty('playback_url')) {
                obj['playback_url'] = ApiClient.convertToType(data['playback_url'], 'String');
            }
            if (data.hasOwnProperty('download_url')) {
                obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
            }
            if (data.hasOwnProperty('share_url')) {
                obj['share_url'] = ApiClient.convertToType(data['share_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the video. UUID Version 4.
 * @member {String} id
 */
Video.prototype['id'] = undefined;

/**
 * The title of the video given by the uploading user.
 * @member {String} title
 */
Video.prototype['title'] = undefined;

/**
 * The video's runtime in seconds.
 * @member {Number} duration
 */
Video.prototype['duration'] = undefined;

/**
 * The display type determines if the video is branded or unbranded (can also be none or both). This affects whether the video is displayed on branded or unbranded marketing materials such as the property website.
 * @member {module:model/Video.DisplayTypeEnum} display_type
 */
Video.prototype['display_type'] = undefined;

/**
 * The original upload source of the video, used to determine how to handle the playback_url of the video and other display properties. 
 * @member {module:model/Video.SourceTypeEnum} source_type
 */
Video.prototype['source_type'] = undefined;

/**
 * A thumbnail image URL for the video.
 * @member {String} thumbnail_url
 */
Video.prototype['thumbnail_url'] = undefined;

/**
 * A URL linking to playback stream of the video.
 * @member {String} playback_url
 */
Video.prototype['playback_url'] = undefined;

/**
 * A URL for downloading the video.
 * @member {String} download_url
 */
Video.prototype['download_url'] = undefined;

/**
 * A URL linking to a public viewing optimized webpage the video.
 * @member {String} share_url
 */
Video.prototype['share_url'] = undefined;





/**
 * Allowed values for the <code>display_type</code> property.
 * @enum {String}
 * @readonly
 */
Video['DisplayTypeEnum'] = {

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
    "BOTH": "BOTH",

    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE"
};


/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
Video['SourceTypeEnum'] = {

    /**
     * value: "YOUTUBE"
     * @const
     */
    "YOUTUBE": "YOUTUBE",

    /**
     * value: "VIMEO"
     * @const
     */
    "VIMEO": "VIMEO",

    /**
     * value: "OPTIMIZED"
     * @const
     */
    "OPTIMIZED": "OPTIMIZED",

    /**
     * value: "UPLOADED"
     * @const
     */
    "UPLOADED": "UPLOADED",

    /**
     * value: "LINK"
     * @const
     */
    "LINK": "LINK"
};



export default Video;

