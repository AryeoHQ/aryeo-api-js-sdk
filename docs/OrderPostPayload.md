# Aryeo.OrderPostPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillmentStatus** | **String** | The fulfillment status of the order. Defaults to \&quot;UNFULFILLED\&quot;. | [optional] 
**internalNotes** | **String** | Internal notes that will be attached to the order. Viewable only by the team. | [optional] 
**addressId** | **String** | ID of the address to associate with the order. UUID Version 4. | [optional] 
**customerId** | **String** | ID of the customer to associate with the order. UUID Version 4. | [optional] 
**notify** | **Boolean** | Indicates if the customer and creator notifications should be sent when creating the order. Requires an address and customer to be set in order for the notifications to be sent. | [optional] 
**lockDownloadForPayment** | **Boolean** | Indicates if the downloads for the attached listing should be locked while there is an outstanding balance on the order. | [optional] 
**allowPaymentsBeforeFulfillment** | **Boolean** | Indicates if the order will allow payments from the customer before the order is marked as fulfilled. | [optional] 



## Enum: FulfillmentStatusEnum


* `FULFILLED` (value: `"FULFILLED"`)

* `UNFULFILLED` (value: `"UNFULFILLED"`)




