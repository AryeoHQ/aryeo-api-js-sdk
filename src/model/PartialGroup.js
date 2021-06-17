/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PartialGroup model module.
 * @module model/PartialGroup
 * @version 1.0.0
 */
class PartialGroup {
    /**
     * Constructs a new <code>PartialGroup</code>.
     * A collection of users that can interact with the Aryeo platform. Permissions and properties are determined based on the type which can be creator, agent, or brokerage.
     * @alias module:model/PartialGroup
     * @param id {String} ID of the group.
     * @param groupType {module:model/PartialGroup.GroupTypeEnum} The type of group.
     * @param name {String} The name of the group.
     * @param isBrokerageOrBrokerageAgent {Boolean} Does this group represent a brokerage or an agent who belongs to a brokerage?
     */
    constructor(id, groupType, name, isBrokerageOrBrokerageAgent) { 
        
        PartialGroup.initialize(this, id, groupType, name, isBrokerageOrBrokerageAgent);
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
     * Constructs a <code>PartialGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialGroup} obj Optional instance to populate.
     * @return {module:model/PartialGroup} The populated <code>PartialGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartialGroup();

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
            if (data.hasOwnProperty('is_brokerage_or_brokerage_agent')) {
                obj['is_brokerage_or_brokerage_agent'] = ApiClient.convertToType(data['is_brokerage_or_brokerage_agent'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * ID of the group.
 * @member {String} id
 */
PartialGroup.prototype['id'] = undefined;

/**
 * The type of group.
 * @member {module:model/PartialGroup.GroupTypeEnum} group_type
 */
PartialGroup.prototype['group_type'] = undefined;

/**
 * The name of the group.
 * @member {String} name
 */
PartialGroup.prototype['name'] = undefined;

/**
 * Group logo.
 * @member {String} logo
 */
PartialGroup.prototype['logo'] = undefined;

/**
 * Email.
 * @member {String} email
 */
PartialGroup.prototype['email'] = undefined;

/**
 * Phone number.
 * @member {String} phone
 */
PartialGroup.prototype['phone'] = undefined;

/**
 * Does this group represent a brokerage or an agent who belongs to a brokerage?
 * @member {Boolean} is_brokerage_or_brokerage_agent
 */
PartialGroup.prototype['is_brokerage_or_brokerage_agent'] = undefined;





/**
 * Allowed values for the <code>group_type</code> property.
 * @enum {String}
 * @readonly
 */
PartialGroup['GroupTypeEnum'] = {

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



export default PartialGroup;

