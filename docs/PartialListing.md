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



## Enum: DeliveryStatusEnum


* `delivered` (value: `"delivered"`)

* `undelivered` (value: `"undelivered"`)





## Enum: StatusEnum


* `Off Market` (value: `"Off Market"`)

* `Pending Lease` (value: `"Pending Lease"`)

* `Vacation Rental` (value: `"Vacation Rental"`)

* `Leased` (value: `"Leased"`)

* `For Sale` (value: `"For Sale"`)

* `Draft` (value: `"Draft"`)

* `Coming Soon` (value: `"Coming Soon"`)

* `Soldm` (value: `"Soldm"`)

* `NULL` (value: `"NULL"`)

* `For Lease` (value: `"For Lease"`)

* `Pending Sale` (value: `"Pending Sale"`)

* `Price Reduction` (value: `"Price Reduction"`)

* `Sold` (value: `"Sold"`)




