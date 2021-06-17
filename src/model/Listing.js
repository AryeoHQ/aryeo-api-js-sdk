/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import FloorPlan from './FloorPlan';
import Group from './Group';
import Image from './Image';
import InteractiveContent from './InteractiveContent';
import Order from './Order';
import PartialAddress from './PartialAddress';
import PropertyDetails from './PropertyDetails';
import PropertyWebsites from './PropertyWebsites';
import Video from './Video';

/**
 * The Listing model module.
 * @module model/Listing
 * @version 1.0.0
 */
class Listing {
    /**
     * Constructs a new <code>Listing</code>.
     * A real-estate property.
     * @alias module:model/Listing
     * @param id {String} ID of the listing.
     * @param address {module:model/PartialAddress} 
     * @param deliveryStatus {module:model/Listing.DeliveryStatusEnum} Has this listing been delivered?
     * @param downloadsEnabled {Boolean} Are downloads enabled for this listing?
     */
    constructor(id, address, deliveryStatus, downloadsEnabled) { 
        
        Listing.initialize(this, id, address, deliveryStatus, downloadsEnabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, address, deliveryStatus, downloadsEnabled) { 
        obj['id'] = id;
        obj['address'] = address;
        obj['delivery_status'] = deliveryStatus;
        obj['downloads_enabled'] = downloadsEnabled;
    }

    /**
     * Constructs a <code>Listing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Listing} obj Optional instance to populate.
     * @return {module:model/Listing} The populated <code>Listing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Listing();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = PartialAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('delivery_status')) {
                obj['delivery_status'] = ApiClient.convertToType(data['delivery_status'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
            if (data.hasOwnProperty('agent')) {
                obj['agent'] = Group.constructFromObject(data['agent']);
            }
            if (data.hasOwnProperty('co_agent')) {
                obj['co_agent'] = Group.constructFromObject(data['co_agent']);
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [Image]);
            }
            if (data.hasOwnProperty('videos')) {
                obj['videos'] = ApiClient.convertToType(data['videos'], [Video]);
            }
            if (data.hasOwnProperty('floor_plans')) {
                obj['floor_plans'] = ApiClient.convertToType(data['floor_plans'], [FloorPlan]);
            }
            if (data.hasOwnProperty('property_websites')) {
                obj['property_websites'] = PropertyWebsites.constructFromObject(data['property_websites']);
            }
            if (data.hasOwnProperty('interactive_content')) {
                obj['interactive_content'] = ApiClient.convertToType(data['interactive_content'], [InteractiveContent]);
            }
            if (data.hasOwnProperty('property_details')) {
                obj['property_details'] = PropertyDetails.constructFromObject(data['property_details']);
            }
            if (data.hasOwnProperty('downloads_enabled')) {
                obj['downloads_enabled'] = ApiClient.convertToType(data['downloads_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [Order]);
            }
        }
        return obj;
    }


}

/**
 * ID of the listing.
 * @member {String} id
 */
Listing.prototype['id'] = undefined;

/**
 * @member {module:model/PartialAddress} address
 */
Listing.prototype['address'] = undefined;

/**
 * Has this listing been delivered?
 * @member {module:model/Listing.DeliveryStatusEnum} delivery_status
 */
Listing.prototype['delivery_status'] = undefined;

/**
 * Thumbnail URL for the listing.
 * @member {String} thumbnail_url
 */
Listing.prototype['thumbnail_url'] = undefined;

/**
 * @member {module:model/Group} agent
 */
Listing.prototype['agent'] = undefined;

/**
 * @member {module:model/Group} co_agent
 */
Listing.prototype['co_agent'] = undefined;

/**
 * images
 * @member {Array.<module:model/Image>} images
 */
Listing.prototype['images'] = undefined;

/**
 * videos
 * @member {Array.<module:model/Video>} videos
 */
Listing.prototype['videos'] = undefined;

/**
 * floor_plans
 * @member {Array.<module:model/FloorPlan>} floor_plans
 */
Listing.prototype['floor_plans'] = undefined;

/**
 * @member {module:model/PropertyWebsites} property_websites
 */
Listing.prototype['property_websites'] = undefined;

/**
 * interactive_content
 * @member {Array.<module:model/InteractiveContent>} interactive_content
 */
Listing.prototype['interactive_content'] = undefined;

/**
 * @member {module:model/PropertyDetails} property_details
 */
Listing.prototype['property_details'] = undefined;

/**
 * Are downloads enabled for this listing?
 * @member {Boolean} downloads_enabled
 */
Listing.prototype['downloads_enabled'] = undefined;

/**
 * orders
 * @member {Array.<module:model/Order>} orders
 */
Listing.prototype['orders'] = undefined;





/**
 * Allowed values for the <code>delivery_status</code> property.
 * @enum {String}
 * @readonly
 */
Listing['DeliveryStatusEnum'] = {

    /**
     * value: "delivered"
     * @const
     */
    "delivered": "delivered",

    /**
     * value: "undelivered"
     * @const
     */
    "undelivered": "undelivered"
};



export default Listing;

