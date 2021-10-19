/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import OrderForm from './OrderForm';
import SocialProfiles from './SocialProfiles';
import User from './User';

/**
 * The Group model module.
 * @module model/Group
 * @version 2021-06-17
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * A collection of users that can interact with the Aryeo platform. Permissions and properties are determined based on the group&#39;s type which can be creator, agent, or brokerage.
     * @alias module:model/Group
     * @param id {String} ID of the group. UUID Version 4.
     * @param type {module:model/Group.TypeEnum} The type of the group. Can be CREATOR, AGENT, or BROKERAGE, and may dictate the attributes of the group returned.
     * @param name {String} The name of the group.
     * @param isBrokerageOrBrokerageAgent {Boolean} Does this group represent a brokerage or an agent who belongs to a brokerage?
     */
    constructor(id, type, name, isBrokerageOrBrokerageAgent) { 
        
        Group.initialize(this, id, type, name, isBrokerageOrBrokerageAgent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, type, name, isBrokerageOrBrokerageAgent) { 
        obj['id'] = id;
        obj['type'] = type;
        obj['name'] = name;
        obj['is_brokerage_or_brokerage_agent'] = isBrokerageOrBrokerageAgent;
    }

    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Group();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('website_url')) {
                obj['website_url'] = ApiClient.convertToType(data['website_url'], 'String');
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('office_name')) {
                obj['office_name'] = ApiClient.convertToType(data['office_name'], 'String');
            }
            if (data.hasOwnProperty('license_number')) {
                obj['license_number'] = ApiClient.convertToType(data['license_number'], 'String');
            }
            if (data.hasOwnProperty('social_profiles')) {
                obj['social_profiles'] = SocialProfiles.constructFromObject(data['social_profiles']);
            }
            if (data.hasOwnProperty('default_order_form')) {
                obj['default_order_form'] = OrderForm.constructFromObject(data['default_order_form']);
            }
            if (data.hasOwnProperty('order_forms')) {
                obj['order_forms'] = ApiClient.convertToType(data['order_forms'], [OrderForm]);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = User.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
            if (data.hasOwnProperty('is_brokerage_or_brokerage_agent')) {
                obj['is_brokerage_or_brokerage_agent'] = ApiClient.convertToType(data['is_brokerage_or_brokerage_agent'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * String representing the object’s type. Objects of the same type share the same schema.
 * @member {String} object
 */
Group.prototype['object'] = undefined;

/**
 * ID of the group. UUID Version 4.
 * @member {String} id
 */
Group.prototype['id'] = undefined;

/**
 * The type of the group. Can be CREATOR, AGENT, or BROKERAGE, and may dictate the attributes of the group returned.
 * @member {module:model/Group.TypeEnum} type
 */
Group.prototype['type'] = undefined;

/**
 * The name of the group.
 * @member {String} name
 */
Group.prototype['name'] = undefined;

/**
 * The email address of a group.
 * @member {String} email
 */
Group.prototype['email'] = undefined;

/**
 * A phone number represented in whichever standards specified by the group, typically ###-###-#### (separated by hyphens).
 * @member {String} phone
 */
Group.prototype['phone'] = undefined;

/**
 * The website URL of a group.
 * @member {String} website_url
 */
Group.prototype['website_url'] = undefined;

/**
 * The logo URL of a group.
 * @member {String} logo_url
 */
Group.prototype['logo_url'] = undefined;

/**
 * The profile image URL of a real estate agent. Only returned if group's type is AGENT.
 * @member {String} avatar_url
 */
Group.prototype['avatar_url'] = undefined;

/**
 * The name of the brokerage or team of a real estate agent. Only returned if group's type is AGENT.
 * @member {String} office_name
 */
Group.prototype['office_name'] = undefined;

/**
 * The license number of a real estate agent. Only returned if group's type is AGENT.
 * @member {String} license_number
 */
Group.prototype['license_number'] = undefined;

/**
 * @member {module:model/SocialProfiles} social_profiles
 */
Group.prototype['social_profiles'] = undefined;

/**
 * @member {module:model/OrderForm} default_order_form
 */
Group.prototype['default_order_form'] = undefined;

/**
 * An array of order forms a vendor group provides for placing orders. Only returned if group's type is CREATOR. 
 * @member {Array.<module:model/OrderForm>} order_forms
 */
Group.prototype['order_forms'] = undefined;

/**
 * @member {module:model/User} owner
 */
Group.prototype['owner'] = undefined;

/**
 * The Aryeo users associated with this group.
 * @member {Array.<module:model/User>} users
 */
Group.prototype['users'] = undefined;

/**
 * Does this group represent a brokerage or an agent who belongs to a brokerage?
 * @member {Boolean} is_brokerage_or_brokerage_agent
 */
Group.prototype['is_brokerage_or_brokerage_agent'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Group['TypeEnum'] = {

    /**
     * value: "CREATOR"
     * @const
     */
    "CREATOR": "CREATOR",

    /**
     * value: "AGENT"
     * @const
     */
    "AGENT": "AGENT",

    /**
     * value: "BROKERAGE"
     * @const
     */
    "BROKERAGE": "BROKERAGE"
};



export default Group;

