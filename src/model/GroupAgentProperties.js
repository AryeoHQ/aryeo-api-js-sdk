/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GroupAgentProperties model module.
 * @module model/GroupAgentProperties
 * @version 1.0.0
 */
class GroupAgentProperties {
    /**
     * Constructs a new <code>GroupAgentProperties</code>.
     * A subset of group properties relevant to agents.
     * @alias module:model/GroupAgentProperties
     */
    constructor() { 
        
        GroupAgentProperties.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GroupAgentProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GroupAgentProperties} obj Optional instance to populate.
     * @return {module:model/GroupAgentProperties} The populated <code>GroupAgentProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GroupAgentProperties();

            if (data.hasOwnProperty('brokerage_name')) {
                obj['brokerage_name'] = ApiClient.convertToType(data['brokerage_name'], 'String');
            }
            if (data.hasOwnProperty('agent_license_number')) {
                obj['agent_license_number'] = ApiClient.convertToType(data['agent_license_number'], 'String');
            }
            if (data.hasOwnProperty('agent_avatar')) {
                obj['agent_avatar'] = ApiClient.convertToType(data['agent_avatar'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of brokerage.
 * @member {String} brokerage_name
 */
GroupAgentProperties.prototype['brokerage_name'] = undefined;

/**
 * Agent's license number.
 * @member {String} agent_license_number
 */
GroupAgentProperties.prototype['agent_license_number'] = undefined;

/**
 * Agent's profile image URL.
 * @member {String} agent_avatar
 */
GroupAgentProperties.prototype['agent_avatar'] = undefined;






export default GroupAgentProperties;

