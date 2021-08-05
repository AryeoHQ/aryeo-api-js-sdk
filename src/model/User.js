/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */

import ApiClient from '../ApiClient';

/**
 * The User model module.
 * @module model/User
 * @version 2021-06-17
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * A record of a person on the Aryeo platform.
     * @alias module:model/User
     * @param id {String} ID of the user. UUID Version 4.
     * @param email {String} Email address of the user.
     */
    constructor(id, email) { 
        
        User.initialize(this, id, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, email) { 
        obj['id'] = id;
        obj['email'] = email;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ApiClient.convertToType(data['relationship'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the user. UUID Version 4.
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * Email address of the user.
 * @member {String} email
 */
User.prototype['email'] = undefined;

/**
 * First name of the user.
 * @member {String} first_name
 */
User.prototype['first_name'] = undefined;

/**
 * Last name of the user.
 * @member {String} last_name
 */
User.prototype['last_name'] = undefined;

/**
 * A phone number represented in whichever standards specified by the user, typically ###-###-#### (separated by hyphens).
 * @member {String} phone
 */
User.prototype['phone'] = undefined;

/**
 * The avatar image URL of a user.
 * @member {String} avatar_url
 */
User.prototype['avatar_url'] = undefined;

/**
 * Describes user's relationship (access level) to a specified group. Only returned if this resource is returned as a sub-resource of a group.
 * @member {String} relationship
 */
User.prototype['relationship'] = undefined;






export default User;

