/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';
import GroupAgentProperties from './GroupAgentProperties';
import OrderForm from './OrderForm';
import SocialProfiles from './SocialProfiles';
import User from './User';

/**
 * The Group model module.
 * @module model/Group
 * @version 1.0.0
 */
class Group {
    /**
     * Constructs a new <code>Group</code>.
     * A collection of users that can interact with the Aryeo platform. Permissions and properties are determined based on the group&#39;s type which can be creator, agent, or brokerage.
     * @alias module:model/Group
     * @param id {String} ID of the group.
     * @param groupType {module:model/Group.GroupTypeEnum} The type of group.
     * @param name {String} The name of the group.
     * @param isBrokerageOrBrokerageAgent {Boolean} Does this group represent a brokerage or an agent who belongs to a brokerage?
     */
    constructor(id, groupType, name, isBrokerageOrBrokerageAgent) { 
        
        Group.initialize(this, id, groupType, name, isBrokerageOrBrokerageAgent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, groupType, name, isBrokerageOrBrokerageAgent) { 
        obj['id'] = id;
        obj['group_type'] = groupType;
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

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('group_type')) {
                obj['group_type'] = ApiClient.convertToType(data['group_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('website')) {
                obj['website'] = ApiClient.convertToType(data['website'], 'String');
            }
            if (data.hasOwnProperty('is_brokerage_or_brokerage_agent')) {
                obj['is_brokerage_or_brokerage_agent'] = ApiClient.convertToType(data['is_brokerage_or_brokerage_agent'], 'Boolean');
            }
            if (data.hasOwnProperty('social_profiles')) {
                obj['social_profiles'] = SocialProfiles.constructFromObject(data['social_profiles']);
            }
            if (data.hasOwnProperty('agent_properties')) {
                obj['agent_properties'] = GroupAgentProperties.constructFromObject(data['agent_properties']);
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [User]);
            }
            if (data.hasOwnProperty('default_order_form')) {
                obj['default_order_form'] = OrderForm.constructFromObject(data['default_order_form']);
            }
            if (data.hasOwnProperty('order_forms')) {
                obj['order_forms'] = ApiClient.convertToType(data['order_forms'], [OrderForm]);
            }
        }
        return obj;
    }


}

/**
 * ID of the group.
 * @member {String} id
 */
Group.prototype['id'] = undefined;

/**
 * The type of group.
 * @member {module:model/Group.GroupTypeEnum} group_type
 */
Group.prototype['group_type'] = undefined;

/**
 * The name of the group.
 * @member {String} name
 */
Group.prototype['name'] = undefined;

/**
 * Group logo.
 * @member {String} logo
 */
Group.prototype['logo'] = undefined;

/**
 * Email.
 * @member {String} email
 */
Group.prototype['email'] = undefined;

/**
 * Phone number.
 * @member {String} phone
 */
Group.prototype['phone'] = undefined;

/**
 * Website.
 * @member {String} website
 */
Group.prototype['website'] = undefined;

/**
 * Does this group represent a brokerage or an agent who belongs to a brokerage?
 * @member {Boolean} is_brokerage_or_brokerage_agent
 */
Group.prototype['is_brokerage_or_brokerage_agent'] = undefined;

/**
 * @member {module:model/SocialProfiles} social_profiles
 */
Group.prototype['social_profiles'] = undefined;

/**
 * @member {module:model/GroupAgentProperties} agent_properties
 */
Group.prototype['agent_properties'] = undefined;

/**
 * users
 * @member {Array.<module:model/User>} users
 */
Group.prototype['users'] = undefined;

/**
 * @member {module:model/OrderForm} default_order_form
 */
Group.prototype['default_order_form'] = undefined;

/**
 * An array of order forms.
 * @member {Array.<module:model/OrderForm>} order_forms
 */
Group.prototype['order_forms'] = undefined;





/**
 * Allowed values for the <code>group_type</code> property.
 * @enum {String}
 * @readonly
 */
Group['GroupTypeEnum'] = {

    /**
     * value: "creator"
     * @const
     */
    "creator": "creator",

    /**
     * value: "agent"
     * @const
     */
    "agent": "agent",

    /**
     * value: "brokerage"
     * @const
     */
    "brokerage": "brokerage"
};



export default Group;

