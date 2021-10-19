/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import Address from './Address';
import FloorPlan from './FloorPlan';
import Group from './Group';
import Image from './Image';
import InteractiveContent from './InteractiveContent';
import ListingBuilding from './ListingBuilding';
import ListingLot from './ListingLot';
import ListingPrice from './ListingPrice';
import Order from './Order';
import PropertyWebsite from './PropertyWebsite';
import Video from './Video';

/**
 * The Listing model module.
 * @module model/Listing
 * @version 2021-06-17
 */
class Listing {
    /**
     * Constructs a new <code>Listing</code>.
     * A real estate listing.
     * @alias module:model/Listing
     * @param object {String} String representing the object’s type. Objects of the same type share the same schema.
     * @param id {String} ID of the listing. UUID Version 4.
     * @param address {module:model/Address} 
     * @param downloadsEnabled {Boolean} Are downloads enabled for this listing?
     */
    constructor(object, id, address, downloadsEnabled) { 
        
        Listing.initialize(this, object, id, address, downloadsEnabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, object, id, address, downloadsEnabled) { 
        obj['object'] = object;
        obj['id'] = id;
        obj['address'] = address;
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

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = Address.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('mls_number')) {
                obj['mls_number'] = ApiClient.convertToType(data['mls_number'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sub_type')) {
                obj['sub_type'] = ApiClient.convertToType(data['sub_type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('standard_status')) {
                obj['standard_status'] = ApiClient.convertToType(data['standard_status'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('lot')) {
                obj['lot'] = ListingLot.constructFromObject(data['lot']);
            }
            if (data.hasOwnProperty('building')) {
                obj['building'] = ListingBuilding.constructFromObject(data['building']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ListingPrice.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('list_agent')) {
                obj['list_agent'] = Group.constructFromObject(data['list_agent']);
            }
            if (data.hasOwnProperty('co_list_agent')) {
                obj['co_list_agent'] = Group.constructFromObject(data['co_list_agent']);
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
            if (data.hasOwnProperty('interactive_content')) {
                obj['interactive_content'] = ApiClient.convertToType(data['interactive_content'], [InteractiveContent]);
            }
            if (data.hasOwnProperty('property_website')) {
                obj['property_website'] = PropertyWebsite.constructFromObject(data['property_website']);
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [Order]);
            }
            if (data.hasOwnProperty('downloads_enabled')) {
                obj['downloads_enabled'] = ApiClient.convertToType(data['downloads_enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * String representing the object’s type. Objects of the same type share the same schema.
 * @member {String} object
 */
Listing.prototype['object'] = undefined;

/**
 * ID of the listing. UUID Version 4.
 * @member {String} id
 */
Listing.prototype['id'] = undefined;

/**
 * @member {module:model/Address} address
 */
Listing.prototype['address'] = undefined;

/**
 * The identifier for a listing on its local MLS. 
 * @member {String} mls_number
 */
Listing.prototype['mls_number'] = undefined;

/**
 * General type of the listing, primarily categorizing its use case. Examples include residential and commercial. 
 * @member {module:model/Listing.TypeEnum} type
 */
Listing.prototype['type'] = undefined;

/**
 * Further specifies the listing type. Examples include family residence and condominium.
 * @member {module:model/Listing.SubTypeEnum} sub_type
 */
Listing.prototype['sub_type'] = undefined;

/**
 * Local, regional, or otherwise custom status for the listing used by the parties involved in the listing transaction. While variable, these statuses are typically mapped to the listing's standard status.
 * @member {module:model/Listing.StatusEnum} status
 */
Listing.prototype['status'] = undefined;

/**
 * The status of the listing as it reflects the state of the contract between the listing agent and seller or an agreement with a buyer, including Active, Active Under Contract, Canceled, Closed, Expired, Pending, and Withdrawn.
 * @member {module:model/Listing.StandardStatusEnum} standard_status
 */
Listing.prototype['standard_status'] = undefined;

/**
 * Description of the selling points of the building and/or land for sale. 
 * @member {String} description
 */
Listing.prototype['description'] = undefined;

/**
 * @member {module:model/ListingLot} lot
 */
Listing.prototype['lot'] = undefined;

/**
 * @member {module:model/ListingBuilding} building
 */
Listing.prototype['building'] = undefined;

/**
 * @member {module:model/ListingPrice} price
 */
Listing.prototype['price'] = undefined;

/**
 * @member {module:model/Group} list_agent
 */
Listing.prototype['list_agent'] = undefined;

/**
 * @member {module:model/Group} co_list_agent
 */
Listing.prototype['co_list_agent'] = undefined;

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
 * interactive_content
 * @member {Array.<module:model/InteractiveContent>} interactive_content
 */
Listing.prototype['interactive_content'] = undefined;

/**
 * @member {module:model/PropertyWebsite} property_website
 */
Listing.prototype['property_website'] = undefined;

/**
 * orders
 * @member {Array.<module:model/Order>} orders
 */
Listing.prototype['orders'] = undefined;

/**
 * Are downloads enabled for this listing?
 * @member {Boolean} downloads_enabled
 */
Listing.prototype['downloads_enabled'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Listing['TypeEnum'] = {

    /**
     * value: "BUSINESS_OPPORTUNITY"
     * @const
     */
    "BUSINESS_OPPORTUNITY": "BUSINESS_OPPORTUNITY",

    /**
     * value: "COMMERCIAL_LEASE"
     * @const
     */
    "COMMERCIAL_LEASE": "COMMERCIAL_LEASE",

    /**
     * value: "COMMERCIAL_SALE"
     * @const
     */
    "COMMERCIAL_SALE": "COMMERCIAL_SALE",

    /**
     * value: "FARM"
     * @const
     */
    "FARM": "FARM",

    /**
     * value: "LAND"
     * @const
     */
    "LAND": "LAND",

    /**
     * value: "MANUFACTURED_IN_PARK"
     * @const
     */
    "MANUFACTURED_IN_PARK": "MANUFACTURED_IN_PARK",

    /**
     * value: "RESIDENTIAL"
     * @const
     */
    "RESIDENTIAL": "RESIDENTIAL",

    /**
     * value: "RESIDENTIAL_INCOME"
     * @const
     */
    "RESIDENTIAL_INCOME": "RESIDENTIAL_INCOME",

    /**
     * value: "RESIDENTIAL_LEASE"
     * @const
     */
    "RESIDENTIAL_LEASE": "RESIDENTIAL_LEASE"
};


/**
 * Allowed values for the <code>sub_type</code> property.
 * @enum {String}
 * @readonly
 */
Listing['SubTypeEnum'] = {

    /**
     * value: "APARTMENT"
     * @const
     */
    "APARTMENT": "APARTMENT",

    /**
     * value: "CONDOMINIUM"
     * @const
     */
    "CONDOMINIUM": "CONDOMINIUM",

    /**
     * value: "DUPLEX"
     * @const
     */
    "DUPLEX": "DUPLEX",

    /**
     * value: "FARM"
     * @const
     */
    "FARM": "FARM",

    /**
     * value: "SINGLE_FAMILY_RESIDENCE"
     * @const
     */
    "SINGLE_FAMILY_RESIDENCE": "SINGLE_FAMILY_RESIDENCE",

    /**
     * value: "TIMESHARE"
     * @const
     */
    "TIMESHARE": "TIMESHARE",

    /**
     * value: "TOWNHOUSE"
     * @const
     */
    "TOWNHOUSE": "TOWNHOUSE",

    /**
     * value: "OFFICE"
     * @const
     */
    "OFFICE": "OFFICE"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Listing['StatusEnum'] = {

    /**
     * value: "DRAFT"
     * @const
     */
    "DRAFT": "DRAFT",

    /**
     * value: "COMING_SOON"
     * @const
     */
    "COMING_SOON": "COMING_SOON",

    /**
     * value: "FOR_SALE"
     * @const
     */
    "FOR_SALE": "FOR_SALE",

    /**
     * value: "FOR_LEASE"
     * @const
     */
    "FOR_LEASE": "FOR_LEASE",

    /**
     * value: "PENDING_SALE"
     * @const
     */
    "PENDING_SALE": "PENDING_SALE",

    /**
     * value: "PENDING_LEASE"
     * @const
     */
    "PENDING_LEASE": "PENDING_LEASE",

    /**
     * value: "SOLD"
     * @const
     */
    "SOLD": "SOLD",

    /**
     * value: "LEASED"
     * @const
     */
    "LEASED": "LEASED",

    /**
     * value: "OFF_MARKET"
     * @const
     */
    "OFF_MARKET": "OFF_MARKET"
};


/**
 * Allowed values for the <code>standard_status</code> property.
 * @enum {String}
 * @readonly
 */
Listing['StandardStatusEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "ACTIVE_UNDER_CONTRACT"
     * @const
     */
    "ACTIVE_UNDER_CONTRACT": "ACTIVE_UNDER_CONTRACT",

    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED",

    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED",

    /**
     * value: "COMING_SOON"
     * @const
     */
    "COMING_SOON": "COMING_SOON",

    /**
     * value: "DELETE"
     * @const
     */
    "DELETE": "DELETE",

    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",

    /**
     * value: "HOLD"
     * @const
     */
    "HOLD": "HOLD",

    /**
     * value: "INCOMPLETE"
     * @const
     */
    "INCOMPLETE": "INCOMPLETE",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "WITHDRAWN"
     * @const
     */
    "WITHDRAWN": "WITHDRAWN"
};



export default Listing;

