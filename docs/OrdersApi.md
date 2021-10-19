# Aryeo.OrdersApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrders**](OrdersApi.md#getOrders) | **GET** /orders | List all orders.
[**getOrdersId**](OrdersApi.md#getOrdersId) | **GET** /orders/{order_id} | Retrieve an order.
[**getProducts**](OrdersApi.md#getProducts) | **GET** /products | List all products.
[**postOrders**](OrdersApi.md#postOrders) | **POST** /orders | Create an order.



## getOrders

> OrderCollection getOrders(opts)

List all orders.

Lists all orders of a group.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.OrdersApi();
let opts = {
  'sort': -created_at, // String | Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `-created_at`.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2 // String | The requested page. Defaults to 1.
};
apiInstance.getOrders(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**| Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to &#x60;-created_at&#x60;. | [optional] 
 **perPage** | **String**| The number of items per page. Defaults to 25. | [optional] 
 **page** | **String**| The requested page. Defaults to 1. | [optional] 

### Return type

[**OrderCollection**](OrderCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrdersId

> OrderResource getOrdersId(orderId, opts)

Retrieve an order.

Retrieves the details of an order with the given ID.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.OrdersApi();
let orderId = 00000000-0000-4000-8000-000000000000; // String | The ID of an order. UUID Version 4.
let opts = {
  'include': items,appointments,unconfirmed_appointments // String | Comma separated list of optional data to include in the response.
};
apiInstance.getOrdersId(orderId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**String**](.md)| The ID of an order. UUID Version 4. | 
 **include** | **String**| Comma separated list of optional data to include in the response. | [optional] 

### Return type

[**OrderResource**](OrderResource.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProducts

> ProductCollection getProducts(opts)

List all products.

List all products of a group.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.OrdersApi();
let opts = {
  'sort': -created_at, // String | Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to `title`.
  'perPage': 25, // String | The number of items per page. Defaults to 25.
  'page': 2, // String | The requested page. Defaults to 1.
  'filterSearch': Photography, // String | Return products that have fields matching this term.
  'filterIncludeInactive': true, // Boolean | Include inactive products (in addition to active products) when returning products.
  'filterCategoryIds': ["00000000-0000-4000-8000-000000000000"], // [String] | Return products in the given categories.
  'filterType': MAIN // String | Return products matching the given type. Allowed values are: MAIN, ADDON.
};
apiInstance.getProducts(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **String**| Comma separated list of fields used for sorting. Placing a minus symbol in front of a field name sorts in descending order. Defaults to &#x60;title&#x60;. | [optional] 
 **perPage** | **String**| The number of items per page. Defaults to 25. | [optional] 
 **page** | **String**| The requested page. Defaults to 1. | [optional] 
 **filterSearch** | **String**| Return products that have fields matching this term. | [optional] 
 **filterIncludeInactive** | **Boolean**| Include inactive products (in addition to active products) when returning products. | [optional] 
 **filterCategoryIds** | [**[String]**](String.md)| Return products in the given categories. | [optional] 
 **filterType** | **String**| Return products matching the given type. Allowed values are: MAIN, ADDON. | [optional] 

### Return type

[**ProductCollection**](ProductCollection.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postOrders

> OrderResource postOrders(opts)

Create an order.

Create an order.

### Example

```javascript
import Aryeo from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;
// Configure Bearer access token for authorization: Token
let Token = defaultClient.authentications['Token'];
Token.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new Aryeo.OrdersApi();
let opts = {
  'orderPostPayload': new Aryeo.OrderPostPayload() // OrderPostPayload | OrderPostPayload
};
apiInstance.postOrders(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPostPayload** | [**OrderPostPayload**](OrderPostPayload.md)| OrderPostPayload | [optional] 

### Return type

[**OrderResource**](OrderResource.md)

### Authorization

[Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

