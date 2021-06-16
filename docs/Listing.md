# Aryeo.Listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the listing. | 
**address** | [**PartialAddress**](PartialAddress.md) |  | 
**deliveryStatus** | **String** | Has this listing been delivered? | 
**thumbnailUrl** | **String** | Thumbnail URL for the listing. | [optional] 
**agent** | [**Group**](Group.md) |  | [optional] 
**coAgent** | [**Group**](Group.md) |  | [optional] 
**images** | [**[Image]**](Image.md) | images | [optional] 
**videos** | [**[Video]**](Video.md) | videos | [optional] 
**floorPlans** | [**[FloorPlan]**](FloorPlan.md) | floor_plans | [optional] 
**propertyWebsites** | [**PropertyWebsites**](PropertyWebsites.md) |  | [optional] 
**interactiveContent** | [**[InteractiveContent]**](InteractiveContent.md) | interactive_content | [optional] 
**propertyDetails** | [**PropertyDetails**](PropertyDetails.md) |  | [optional] 
**downloadsEnabled** | **Boolean** | Are downloads enabled for this listing? | 
**orders** | [**[Order]**](Order.md) | orders | [optional] 



## Enum: DeliveryStatusEnum


* `delivered` (value: `"delivered"`)

* `undelivered` (value: `"undelivered"`)




