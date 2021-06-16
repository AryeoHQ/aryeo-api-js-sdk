# Aryeo.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the order. | 
**displayId** | **Number** | A vanity id to be displayed for the order. For example, \&quot;Order #1000\&quot;. | 
**totalPriceCents** | **Number** | The total price of the order given in cents. | 
**currency** | [**Currency**](Currency.md) |  | 
**paymentStatus** | **String** | The payment status of the order. | 
**paymentUrl** | **String** | A URL for to pay for the order. | [optional] 
**listing** | [**PartialListing**](PartialListing.md) |  | [optional] 
**fulfillmentStatus** | **String** | The fulfillment status of the order. | 

<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum

* `paid` (value: `"paid"`)
* `unpaid` (value: `"unpaid"`)


<a name="FulfillmentStatusEnum"></a>
## Enum: FulfillmentStatusEnum

* `fulfilled` (value: `"fulfilled"`)
* `unfulfilled` (value: `"unfulfilled"`)

