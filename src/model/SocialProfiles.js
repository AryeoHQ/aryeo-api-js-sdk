/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SocialProfiles model module.
 * @module model/SocialProfiles
 * @version 2021-06-17
 */
class SocialProfiles {
    /**
     * Constructs a new <code>SocialProfiles</code>.
     * External profile URLs for an agent or brokerage group.
     * @alias module:model/SocialProfiles
     */
    constructor() { 
        
        SocialProfiles.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SocialProfiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SocialProfiles} obj Optional instance to populate.
     * @return {module:model/SocialProfiles} The populated <code>SocialProfiles</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SocialProfiles();

            if (data.hasOwnProperty('facebook_profile_url')) {
                obj['facebook_profile_url'] = ApiClient.convertToType(data['facebook_profile_url'], 'String');
            }
            if (data.hasOwnProperty('instagram_profile_url')) {
                obj['instagram_profile_url'] = ApiClient.convertToType(data['instagram_profile_url'], 'String');
            }
            if (data.hasOwnProperty('twitter_profile_url')) {
                obj['twitter_profile_url'] = ApiClient.convertToType(data['twitter_profile_url'], 'String');
            }
            if (data.hasOwnProperty('linkedin_profile_url')) {
                obj['linkedin_profile_url'] = ApiClient.convertToType(data['linkedin_profile_url'], 'String');
            }
            if (data.hasOwnProperty('zillow_profile_url')) {
                obj['zillow_profile_url'] = ApiClient.convertToType(data['zillow_profile_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * URL for Facebook.
 * @member {String} facebook_profile_url
 */
SocialProfiles.prototype['facebook_profile_url'] = undefined;

/**
 * URL for Instagram.
 * @member {String} instagram_profile_url
 */
SocialProfiles.prototype['instagram_profile_url'] = undefined;

/**
 * URL for Twitter.
 * @member {String} twitter_profile_url
 */
SocialProfiles.prototype['twitter_profile_url'] = undefined;

/**
 * URL for LinkedIn.
 * @member {String} linkedin_profile_url
 */
SocialProfiles.prototype['linkedin_profile_url'] = undefined;

/**
 * URL for Zillow.
 * @member {String} zillow_profile_url
 */
SocialProfiles.prototype['zillow_profile_url'] = undefined;






export default SocialProfiles;

