# Aryeo.OrderPostPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillmentStatus** | **String** | The fulfillment status of the order. | [optional] 
**paymentStatus** | **String** | The payment status of the order. | [optional] 
**productItems** | [**[ProductItem]**](ProductItem.md) | product_items | [optional] 

<a name="FulfillmentStatusEnum"></a>
## Enum: FulfillmentStatusEnum

* `fulfilled` (value: `"fulfilled"`)
* `unfulfilled` (value: `"unfulfilled"`)


<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum

* `paid` (value: `"paid"`)
* `unpaid` (value: `"unpaid"`)

