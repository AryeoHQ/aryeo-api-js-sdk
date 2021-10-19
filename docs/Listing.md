# Aryeo.Listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object** | **String** | String representing the object’s type. Objects of the same type share the same schema. | 
**id** | **String** | ID of the listing. UUID Version 4. | 
**address** | [**Address**](Address.md) |  | 
**mlsNumber** | **String** | The identifier for a listing on its local MLS.  | [optional] 
**type** | **String** | General type of the listing, primarily categorizing its use case. Examples include residential and commercial.  | [optional] 
**subType** | **String** | Further specifies the listing type. Examples include family residence and condominium. | [optional] 
**status** | **String** | Local, regional, or otherwise custom status for the listing used by the parties involved in the listing transaction. While variable, these statuses are typically mapped to the listing&#39;s standard status. | [optional] 
**standardStatus** | **String** | The status of the listing as it reflects the state of the contract between the listing agent and seller or an agreement with a buyer, including Active, Active Under Contract, Canceled, Closed, Expired, Pending, and Withdrawn. | [optional] 
**description** | **String** | Description of the selling points of the building and/or land for sale.  | [optional] 
**lot** | [**ListingLot**](ListingLot.md) |  | [optional] 
**building** | [**ListingBuilding**](ListingBuilding.md) |  | [optional] 
**price** | [**ListingPrice**](ListingPrice.md) |  | [optional] 
**listAgent** | [**Group**](Group.md) |  | [optional] 
**coListAgent** | [**Group**](Group.md) |  | [optional] 
**images** | [**[Image]**](Image.md) | images | [optional] 
**videos** | [**[Video]**](Video.md) | videos | [optional] 
**floorPlans** | [**[FloorPlan]**](FloorPlan.md) | floor_plans | [optional] 
**interactiveContent** | [**[InteractiveContent]**](InteractiveContent.md) | interactive_content | [optional] 
**propertyWebsite** | [**PropertyWebsite**](PropertyWebsite.md) |  | [optional] 
**orders** | [**[Order]**](Order.md) | orders | [optional] 
**downloadsEnabled** | **Boolean** | Are downloads enabled for this listing? | 



## Enum: TypeEnum


* `BUSINESS_OPPORTUNITY` (value: `"BUSINESS_OPPORTUNITY"`)

* `COMMERCIAL_LEASE` (value: `"COMMERCIAL_LEASE"`)

* `COMMERCIAL_SALE` (value: `"COMMERCIAL_SALE"`)

* `FARM` (value: `"FARM"`)

* `LAND` (value: `"LAND"`)

* `MANUFACTURED_IN_PARK` (value: `"MANUFACTURED_IN_PARK"`)

* `RESIDENTIAL` (value: `"RESIDENTIAL"`)

* `RESIDENTIAL_INCOME` (value: `"RESIDENTIAL_INCOME"`)

* `RESIDENTIAL_LEASE` (value: `"RESIDENTIAL_LEASE"`)





## Enum: SubTypeEnum


* `APARTMENT` (value: `"APARTMENT"`)

* `CONDOMINIUM` (value: `"CONDOMINIUM"`)

* `DUPLEX` (value: `"DUPLEX"`)

* `FARM` (value: `"FARM"`)

* `SINGLE_FAMILY_RESIDENCE` (value: `"SINGLE_FAMILY_RESIDENCE"`)

* `TIMESHARE` (value: `"TIMESHARE"`)

* `TOWNHOUSE` (value: `"TOWNHOUSE"`)

* `OFFICE` (value: `"OFFICE"`)





## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `COMING_SOON` (value: `"COMING_SOON"`)

* `FOR_SALE` (value: `"FOR_SALE"`)

* `FOR_LEASE` (value: `"FOR_LEASE"`)

* `PENDING_SALE` (value: `"PENDING_SALE"`)

* `PENDING_LEASE` (value: `"PENDING_LEASE"`)

* `SOLD` (value: `"SOLD"`)

* `LEASED` (value: `"LEASED"`)

* `OFF_MARKET` (value: `"OFF_MARKET"`)





## Enum: StandardStatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `ACTIVE_UNDER_CONTRACT` (value: `"ACTIVE_UNDER_CONTRACT"`)

* `CANCELED` (value: `"CANCELED"`)

* `CLOSED` (value: `"CLOSED"`)

* `COMING_SOON` (value: `"COMING_SOON"`)

* `DELETE` (value: `"DELETE"`)

* `EXPIRED` (value: `"EXPIRED"`)

* `HOLD` (value: `"HOLD"`)

* `INCOMPLETE` (value: `"INCOMPLETE"`)

* `PENDING` (value: `"PENDING"`)

* `WITHDRAWN` (value: `"WITHDRAWN"`)




