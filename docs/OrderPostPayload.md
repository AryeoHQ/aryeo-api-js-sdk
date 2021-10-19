# Aryeo.OrderPostPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillmentStatus** | **String** | The fulfillment status of the order. Defaults to \&quot;UNFULFILLED\&quot;. | [optional] 
**internalNotes** | **String** | Internal notes that will be attached to the order. Viewable only by the team. | [optional] 
**paymentStatus** | **String** | The payment status of the order. Defaults to \&quot;UNPAID\&quot;.  | [optional] 
**addressId** | **String** | ID of the address to associate with the order. UUID Version 4. | [optional] 
**customerId** | **String** | ID of the customer to associate with the order. UUID Version 4. | [optional] 



## Enum: FulfillmentStatusEnum


* `FULFILLED` (value: `"FULFILLED"`)

* `UNFULFILLED` (value: `"UNFULFILLED"`)





## Enum: PaymentStatusEnum


* `PAID` (value: `"PAID"`)

* `UNPAID` (value: `"UNPAID"`)




