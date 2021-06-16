# Aryeo.PartialListing

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the listing. | 
**address** | [**PartialAddress**](PartialAddress.md) |  | 
**deliveryStatus** | **String** | Has the listing been delivered? | 
**thumbnailUrl** | **String** | Thumbnail URL for the listing. | [optional] 
**price** | **Number** | The price of the property in dollars. | [optional] 
**brandedUrl** | **String** | URL for branded property website. | [optional] 
**squareFeet** | **Number** | Total number of square feet. | [optional] 
**bedrooms** | **Number** | Number of bedrooms. | [optional] 
**bathrooms** | **Number** | Number of bathrooms. | [optional] 
**downloadsEnabled** | **Boolean** | Are downloads enabled for this listing? | 
**status** | **String** | Sales status for the listing. | [optional] 
**propertyDetails** | [**PropertyDetails**](PropertyDetails.md) |  | [optional] 
**agent** | [**PartialGroup**](PartialGroup.md) |  | [optional] 
**coAgent** | [**PartialGroup**](PartialGroup.md) |  | [optional] 

<a name="DeliveryStatusEnum"></a>
## Enum: DeliveryStatusEnum

* `delivered` (value: `"delivered"`)
* `undelivered` (value: `"undelivered"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `offMarket` (value: `"Off Market"`)
* `pendingLease` (value: `"Pending Lease"`)
* `vacationRental` (value: `"Vacation Rental"`)
* `leased` (value: `"Leased"`)
* `forSale` (value: `"For Sale"`)
* `draft` (value: `"Draft"`)
* `comingSoon` (value: `"Coming Soon"`)
* `soldm` (value: `"Soldm"`)
* `NULL` (value: `"NULL"`)
* `forLease` (value: `"For Lease"`)
* `pendingSale` (value: `"Pending Sale"`)
* `priceReduction` (value: `"Price Reduction"`)
* `sold` (value: `"Sold"`)

