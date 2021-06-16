# Aryeo.OrdersApi

All URIs are relative to *https://api.aryeo.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrders**](OrdersApi.md#getOrders) | **GET** /orders | Get orders available to a group.
[**postOrders**](OrdersApi.md#postOrders) | **POST** /orders | Create an order.

<a name="getOrders"></a>
# **getOrders**
> OrderCollection getOrders()

Get orders available to a group.

Get orders of a group.

### Example
```javascript
import {Aryeo} from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;


let apiInstance = new Aryeo.OrdersApi();
apiInstance.getOrders((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**OrderCollection**](OrderCollection.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postOrders"></a>
# **postOrders**
> OrderResource postOrders(opts)

Create an order.

Create an order.

### Example
```javascript
import {Aryeo} from 'aryeo';
let defaultClient = Aryeo.ApiClient.instance;


let apiInstance = new Aryeo.OrdersApi();
let opts = { 
  'body': new Aryeo.OrderPostPayload() // OrderPostPayload | OrderPostPayload
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
 **body** | [**OrderPostPayload**](OrderPostPayload.md)| OrderPostPayload | [optional] 

### Return type

[**OrderResource**](OrderResource.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

