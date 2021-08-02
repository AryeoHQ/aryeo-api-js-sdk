/**
 * Aryeo
 *
 * Contact: jarrod@aryeo.com
 *
 */


import ApiClient from './ApiClient';
import Address from './model/Address';
import ApiError from './model/ApiError';
import ApiFail from './model/ApiFail';
import FloorPlan from './model/FloorPlan';
import Group from './model/Group';
import GroupCollection from './model/GroupCollection';
import GroupResource from './model/GroupResource';
import Image from './model/Image';
import InteractiveContent from './model/InteractiveContent';
import Listing from './model/Listing';
import ListingBuilding from './model/ListingBuilding';
import ListingCollection from './model/ListingCollection';
import ListingLot from './model/ListingLot';
import ListingPrice from './model/ListingPrice';
import ListingResource from './model/ListingResource';
import Order from './model/Order';
import OrderCollection from './model/OrderCollection';
import OrderForm from './model/OrderForm';
import OrderPostPayload from './model/OrderPostPayload';
import OrderResource from './model/OrderResource';
import PaginationLinks from './model/PaginationLinks';
import PaginationMeta from './model/PaginationMeta';
import PropertyWebsite from './model/PropertyWebsite';
import SocialProfiles from './model/SocialProfiles';
import User from './model/User';
import Video from './model/Video';
import ListingsApi from './api/ListingsApi';
import OrdersApi from './api/OrdersApi';
import VendorsApi from './api/VendorsApi';


/**
* Javascript SDK for Aryeo API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Aryeo = require('index'); // See note below*.
* var xxxSvc = new Aryeo.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Aryeo.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Aryeo.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Aryeo.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2021-06-17
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The ApiError model constructor.
     * @property {module:model/ApiError}
     */
    ApiError,

    /**
     * The ApiFail model constructor.
     * @property {module:model/ApiFail}
     */
    ApiFail,

    /**
     * The FloorPlan model constructor.
     * @property {module:model/FloorPlan}
     */
    FloorPlan,

    /**
     * The Group model constructor.
     * @property {module:model/Group}
     */
    Group,

    /**
     * The GroupCollection model constructor.
     * @property {module:model/GroupCollection}
     */
    GroupCollection,

    /**
     * The GroupResource model constructor.
     * @property {module:model/GroupResource}
     */
    GroupResource,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The InteractiveContent model constructor.
     * @property {module:model/InteractiveContent}
     */
    InteractiveContent,

    /**
     * The Listing model constructor.
     * @property {module:model/Listing}
     */
    Listing,

    /**
     * The ListingBuilding model constructor.
     * @property {module:model/ListingBuilding}
     */
    ListingBuilding,

    /**
     * The ListingCollection model constructor.
     * @property {module:model/ListingCollection}
     */
    ListingCollection,

    /**
     * The ListingLot model constructor.
     * @property {module:model/ListingLot}
     */
    ListingLot,

    /**
     * The ListingPrice model constructor.
     * @property {module:model/ListingPrice}
     */
    ListingPrice,

    /**
     * The ListingResource model constructor.
     * @property {module:model/ListingResource}
     */
    ListingResource,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OrderCollection model constructor.
     * @property {module:model/OrderCollection}
     */
    OrderCollection,

    /**
     * The OrderForm model constructor.
     * @property {module:model/OrderForm}
     */
    OrderForm,

    /**
     * The OrderPostPayload model constructor.
     * @property {module:model/OrderPostPayload}
     */
    OrderPostPayload,

    /**
     * The OrderResource model constructor.
     * @property {module:model/OrderResource}
     */
    OrderResource,

    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks,

    /**
     * The PaginationMeta model constructor.
     * @property {module:model/PaginationMeta}
     */
    PaginationMeta,

    /**
     * The PropertyWebsite model constructor.
     * @property {module:model/PropertyWebsite}
     */
    PropertyWebsite,

    /**
     * The SocialProfiles model constructor.
     * @property {module:model/SocialProfiles}
     */
    SocialProfiles,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Video model constructor.
     * @property {module:model/Video}
     */
    Video,

    /**
    * The ListingsApi service constructor.
    * @property {module:api/ListingsApi}
    */
    ListingsApi,

    /**
    * The OrdersApi service constructor.
    * @property {module:api/OrdersApi}
    */
    OrdersApi,

    /**
    * The VendorsApi service constructor.
    * @property {module:api/VendorsApi}
    */
    VendorsApi
};
