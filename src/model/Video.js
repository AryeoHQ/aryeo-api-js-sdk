/*
 * Aryeo
 * # Introduction The Aryeo API gives access to the Aryeo platform. You can use your favorite HTTP/REST library for interfacing with the Aryeo API, or you can use one of our SDKs. Our SDKs are procedurally generated and a great starting point for experimental testing. If there is an additional language or framework that you want to see supported, then please reach and out and make a contribution!  <p align=\"center\"> <a href=\"https://github.com/AryeoHQ/aryeo-api-dart-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/dart.svg\" alt=\"Dart\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-go-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/go.svg\" alt=\"Go\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-js-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/js.svg\" alt=\"Node JS\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-php-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/php.svg\" alt=\"PHP\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-ruby-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/ruby.svg\" alt=\"Ruby\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-rust-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/rust.svg\" alt=\"Rust\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> <a href=\"https://github.com/AryeoHQ/aryeo-api-swift-sdk\"><img src=\"https://raw.githubusercontent.com/AryeoHQ/aryeo-api-docs/master/public/images/swift.svg\" alt=\"Swift\" width=\"44\" style=\"padding:10px;border: 1px solid #d3d3d3;border-radius: 5px;margin:4px;\"/></a> </p>  **Note**: Some SDKs may require you to manually add the `Accept` header to all Aryeo API requests. If so, use the value `application/json`.  # Authentication To start using the Aryeo API, you will need to generate an API key from your group's developer settings. You can then authenticate to the Aryeo API by providing your key in the appropriate request header. Requests made without an API key will result in a `401 Unauthorized` error. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jarrod@aryeo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Video model module.
 * @module model/Video
 * @version 1.0.0
 */
export class Video {
  /**
   * Constructs a new <code>Video</code>.
   * A recording of moving visual images. Provided either as a download URL (MP4) or a link (e.g. YouTube, Vimeo).
   * @alias module:model/Video
   * @class
   * @param id {Number} ID of the video.
   * @param displayType {module:model/Video.DisplayTypeEnum} The display type determines if the video is branded or unbranded (can also be none or both). This affects whether the video is displayed on branded or unbranded marketing materials such as the property website.
   * @param sourceType {module:model/Video.SourceTypeEnum} The original upload source of the video, used to determine how to handle the playback_url of the video and other display properties. 
   * @param thumbnailUrl {String} Thumbnail URL for the video.
   * @param playbackUrl {String} A URL linking to the video.
   */
  constructor(id, displayType, sourceType, thumbnailUrl, playbackUrl) {
    this.id = id;
    this.displayType = displayType;
    this.sourceType = sourceType;
    this.thumbnailUrl = thumbnailUrl;
    this.playbackUrl = playbackUrl;
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
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('display_type'))
        obj.displayType = ApiClient.convertToType(data['display_type'], 'String');
      if (data.hasOwnProperty('source_type'))
        obj.sourceType = ApiClient.convertToType(data['source_type'], 'String');
      if (data.hasOwnProperty('thumbnail_url'))
        obj.thumbnailUrl = ApiClient.convertToType(data['thumbnail_url'], 'String');
      if (data.hasOwnProperty('playback_url'))
        obj.playbackUrl = ApiClient.convertToType(data['playback_url'], 'String');
      if (data.hasOwnProperty('download_url'))
        obj.downloadUrl = ApiClient.convertToType(data['download_url'], 'String');
      if (data.hasOwnProperty('seconds'))
        obj.seconds = ApiClient.convertToType(data['seconds'], 'Number');
      if (data.hasOwnProperty('share_url'))
        obj.shareUrl = ApiClient.convertToType(data['share_url'], 'String');
    }
    return obj;
  }
}

/**
 * ID of the video.
 * @member {Number} id
 */
Video.prototype.id = undefined;

/**
 * The title of the video given by the uploading user.
 * @member {String} title
 */
Video.prototype.title = undefined;

/**
 * Allowed values for the <code>displayType</code> property.
 * @enum {String}
 * @readonly
 */
Video.DisplayTypeEnum = {
  /**
   * value: "branded"
   * @const
   */
  branded: "branded",

  /**
   * value: "unbranded"
   * @const
   */
  unbranded: "unbranded",

  /**
   * value: "both"
   * @const
   */
  both: "both",

  /**
   * value: "none"
   * @const
   */
  none: "none"
};
/**
 * The display type determines if the video is branded or unbranded (can also be none or both). This affects whether the video is displayed on branded or unbranded marketing materials such as the property website.
 * @member {module:model/Video.DisplayTypeEnum} displayType
 */
Video.prototype.displayType = undefined;

/**
 * Allowed values for the <code>sourceType</code> property.
 * @enum {String}
 * @readonly
 */
Video.SourceTypeEnum = {
  /**
   * value: "youtube"
   * @const
   */
  youtube: "youtube",

  /**
   * value: "vimeo"
   * @const
   */
  vimeo: "vimeo",

  /**
   * value: "optimized"
   * @const
   */
  optimized: "optimized",

  /**
   * value: "uploaded"
   * @const
   */
  uploaded: "uploaded",

  /**
   * value: "link"
   * @const
   */
  link: "link"
};
/**
 * The original upload source of the video, used to determine how to handle the playback_url of the video and other display properties. 
 * @member {module:model/Video.SourceTypeEnum} sourceType
 */
Video.prototype.sourceType = undefined;

/**
 * Thumbnail URL for the video.
 * @member {String} thumbnailUrl
 */
Video.prototype.thumbnailUrl = undefined;

/**
 * A URL linking to the video.
 * @member {String} playbackUrl
 */
Video.prototype.playbackUrl = undefined;

/**
 * A URL for downloading the video.
 * @member {String} downloadUrl
 */
Video.prototype.downloadUrl = undefined;

/**
 * The video's runtime in seconds.
 * @member {Number} seconds
 */
Video.prototype.seconds = undefined;

/**
 * Aryeo iFrame player URL
 * @member {String} shareUrl
 */
Video.prototype.shareUrl = undefined;

